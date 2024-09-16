set -e

git pull

VERSION=0.1
IMAGE_NAME=client

FULL_IMAGE_NAME=${IMAGE_NAME}:${VERSION}

docker build ../../ -f ../../client/Dockerfile -t ${FULL_IMAGE_NAME}