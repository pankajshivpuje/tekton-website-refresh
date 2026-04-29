---
linkTitle: TektonTrigger
weight: 3
---
# Tekton Trigger

TektonTrigger custom resource allows user to install and manage [Tekton Trigger][trigger]. 

It is recommended to install the components through [TektonConfig](/vault/Operator-v0.74.x-LTS/TektonConfig/).

The TektonTrigger CR is as below:
```yaml
apiVersion: operator.tekton.dev/v1alpha1
kind: TektonTrigger
metadata:
  name: trigger
spec:
  targetNamespace: tekton-pipelines
```
You can install this component using [TektonConfig](/vault/Operator-v0.74.x-LTS/TektonConfig/) by choosing appropriate `profile`.

[trigger]:https://github.com/tektoncd/triggers
