# Hugo Extended is installed from official GitHub releases — the same linux-amd64 .deb as
# `.github/workflows/deploy.yml` (env HUGO_VERSION). That keeps this image aligned with CI
# and avoids third-party Hugo base images whose bundled Node/apt layout may drift.
FROM ubuntu:22.04 AS website

ENV DEBIAN_FRONTEND=noninteractive \
    HUGO_VERSION=0.147.0 \
    DART_SASS_VERSION=1.99.0 \
    PATH="/opt/dart-sass:${PATH}"

RUN apt-get -y update && apt-get -y install --no-install-recommends \
    ca-certificates curl gnupg git build-essential python3-venv python3-pip wget \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && wget -O /tmp/hugo.deb "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb" \
    && apt-get install -y /tmp/hugo.deb \
    && rm /tmp/hugo.deb \
    && wget -qO- "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz" \
    | tar xz -C /opt \
    && hugo version \
    && sass --version \
    && node --version \
    && rm -rf /var/lib/apt/lists/*

COPY . /src
WORKDIR /src
RUN git config --global --add safe.directory /src
RUN npm install
RUN npm install -g netlify-cli@19.1.7

RUN python3 -m venv .venv \
    && . .venv/bin/activate \
    && pip3 install --no-cache-dir -r requirements.txt

ENTRYPOINT ["/usr/bin/netlify"]
CMD ["dev"]
