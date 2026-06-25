FROM ruby:3.3-slim

WORKDIR /srv/jekyll

# Install build tools and corporate CA certificates (needed behind the TQ MITM proxy)
RUN apt-get update && apt-get install -y --no-install-recommends build-essential git ca-certificates && rm -rf /var/lib/apt/lists/*
COPY certs/*.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

COPY Gemfile* ./

RUN bundle install

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
