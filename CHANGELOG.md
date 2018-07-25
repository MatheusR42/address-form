# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **[BREAKING]** Both inputs moved to an `inputs` folder
- **[BREAKING]** CustomInput renamed to StyleguideInput [[#103](https://github.com/vtex/address-form/pull/103)]
- **[BREAKING]** AddressContainer now uses plain children instead of render prop
- AddressContainer passes `address` and `onChangeAddress` via context to children
- AddressContainer now takes `Input` as prop and passes down (also via context)

### Added

- This Changelog
- **`AddressSubmitter`** component and tests
- Submission functionality for AddressContainer