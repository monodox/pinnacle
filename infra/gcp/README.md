# Google Cloud Infrastructure

This folder is the starting point for Pinnacle's Google Cloud deployment.

## Connection Model
- Frontend talks to the agent API over HTTPS.
- The agent runtime authenticates with Google Cloud using Application Default Credentials or Workload Identity.
- Gemini is the only reasoning engine used by the backend agents.
- Vertex AI Search, Google Search, Google Maps, or private enterprise data can be used for grounding and retrieval.

## Recommended Deployment Options
- Cloud Run: best for a smaller stateless API or orchestration layer.
- GKE: best when you need persistent workers, sidecars, custom networking, or more control over scaling.

## Next Implementation Step
Add deployment manifests and a container build once the service boundary is finalized.
