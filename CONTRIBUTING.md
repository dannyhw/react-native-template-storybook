# Contributing

Contributing to this project should be as easy and transparent as possible.

## Workflow

We use [GitHub Flow](https://guides.github.com/introduction/flow/), so all code changes happen through pull requests.

1.  Fork the repository and create your branch from `main`.
2.  If you've changed the functionality, update the documentation.
3.  If your change should be released, run `npx changeset` and commit the generated file.
4.  Issue that pull request! :tada:

## Releases

Releases are automated with [Changesets](https://github.com/changesets/changesets). When changesets land on `main`, a "Version packages" pull request is opened that bumps the version and updates the changelog. Merging that pull request publishes the new version to npm via [trusted publishing](https://docs.npmjs.com/trusted-publishers).

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
