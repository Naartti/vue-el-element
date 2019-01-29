echo 'Initializing npm build for publish'
set -e

# Confirm action
read -r -p "Are you sure you want to publish to npm? [y/N]" response
case "$response" in
    [yY][eE][sS]|[yY])
        true
        ;;
    *)
        exit 1
        ;;
esac

echo 'Runnint unit tests'
# npm run unit

echo 'Bulding for production'
npm run build
# npm run buildPkg

# echo 'Git commit'
git commit -a -m "Build & deploy to npm"

# echo 'Npm patch & publish'
npm version patch
npm publish