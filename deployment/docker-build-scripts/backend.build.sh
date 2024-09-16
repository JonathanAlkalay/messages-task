set -e

git pull

VERSION=0.1
IMAGE_NAME=backend

FULL_IMAGE_NAME=${IMAGE_NAME}:${VERSION}

docker build ../../ -f ../../backend/Dockerfile -t ${FULL_IMAGE_NAME}