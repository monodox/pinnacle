# Multi-stage build for scalable, production-grade Python ADK agent system
FROM python:3.10-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY ../agents/requirements.txt* ./agents/
# If a requirements file exists, install dependencies, otherwise just install adk
RUN if [ -f ./agents/requirements.txt ]; then pip install --user -r ./agents/requirements.txt; fi
RUN pip install --user google-adk uvicorn fastapi

FROM python:3.10-slim AS runner

WORKDIR /app

# Copy installed libraries from builder
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONPATH=/app/agents

# Copy agent backend code
COPY ../agents ./agents

# Expose default ADK and A2A communication ports
EXPOSE 8000
EXPOSE 8080

# The entrypoint launches the ADK Web UI by default
CMD ["adk", "web", "--port", "8000", "--host", "0.0.0.0"]
