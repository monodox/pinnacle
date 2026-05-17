# Pinnacle Enterprise-Ready Infrastructure (Track 3)

This directory contains the production-grade, cloud-native deployment manifests and architectural setups required to run Pinnacle natively on **Google Cloud Platform (GCP)** (via GKE or Cloud Run), conforming to all **Track 3: Marketplace & Enterprise Ready** mandates.

## Track 3 Architectural Conformance

### 1. B2B Enterprise Focus
Pinnacle acts as an autonomous Business Intelligence platform enabling verticalized workflows. In this directory, we scaffold interactions allowing a **Pinnacle Energy Agent** to communicate with an **Enterprise HR Agent** (occupancy optimization scenario) and pull metrics securely from private RAG datastores.

### 2. Cloud-Native Runtimes
We deploy our agent runtime using:
- **Google Kubernetes Engine (GKE)**: Production-ready orchestration with automatic scaling, multi-agent pod topology, and strict isolation. See [infra/gcp/gke/](gcp/gke/).
- **Google Cloud Run**: Serverless scale-to-zero container deployment for optimal cost-efficiency under irregular corporate scheduling. See [infra/gcp/cloud-run/](gcp/cloud-run/).

### 3. Google Cloud Powered Intelligence
All reasoning capabilities run natively on Google Cloud via the Google AI Platform / Vertex AI. The agents leverage standard Gemini architectures (`gemini-flash-latest` and `gemini-pro`) with built-in configurations.

### 4. Secure Agent Identity
We assign a unique cryptographic identity to each deployed agent by utilizing **GCP Workload Identity** and K8s Service Accounts.
- Deployed pods run under the identity of `agent-identity-sa@pinnacle-gcp.iam.gserviceaccount.com`.
- A cryptographic TLS certificate is injected at `/etc/agent-identity` to sign and verify outbound agent requests.

### 5. Agent-to-Agent (A2A) Interoperability
Our communication layer conforms to the **A2A Protocol**, exposing standardized discoverability and routing.
- GKE Ingress routes external corporate agent requests through `/a2a` endpoints.
- Agents are registered in the global Discovery Registry (`registry.agentplatform.google.com`).
- A built-in occupancy optimization config is specified in the A2A ConfigMap, enabling coordinate handshakes (e.g. anticipating meeting spikes to pre-cool facilities).

---

## Directory Architecture

- `Dockerfile`: Multi-stage, non-root, read-only filesystem container optimizing ADK Python execution.
- `gcp/gke/`:
  - `deployment.yaml`: Workload Identity, TLS mounting, and resources constraint manifest.
  - `service.yaml`: ClusterIP definition exposing standard ADK Web and A2A Protocol ports.
  - `ingress.yaml`: Ingress controller configuration mapping path prefixes (`/a2a` and `/`).
  - `a2a-config.yaml`: Discovery protocols, allowed collaborators, and grounding scopes config.
- `gcp/cloud-run/`:
  - `service.yaml`: Knative service specification mapping secrets, autoscaling policies, and container limits.

---

## Grounding & RAG Scaffolding
Individual agents securely enrich their capabilities using **Vertex AI Search**:
- **Google Search Grounding**: Enabled dynamically inside `agent.py` to prevent hallucinations.
- **Enterprise Datastores**: Linked directly using custom datastore IDs (e.g. `pinnacle-knowledge-base`) mapped inside environment secrets.

## Getting Started with Deployment

### Deploying to GKE
1. Build and push the Docker image to Google Container Registry (GCR):
   ```bash
   docker build -t gcr.io/pinnacle-gcp/pinnacle-agents:latest -f Dockerfile .
   docker push gcr.io/pinnacle-gcp/pinnacle-agents:latest
   ```
2. Apply the GKE manifests:
   ```bash
   kubectl apply -f gcp/gke/a2a-config.yaml
   kubectl apply -f gcp/gke/service.yaml
   kubectl apply -f gcp/gke/deployment.yaml
   kubectl apply -f gcp/gke/ingress.yaml
   ```

### Deploying to Cloud Run
Apply the Knative service manifest directly:
```bash
gcloud beta run services replace gcp/cloud-run/service.yaml
```
