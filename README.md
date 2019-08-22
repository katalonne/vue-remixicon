<h1 align="center">Vue Remixicon</h1>

[![Build Status](https://travis-ci.org/katalonne/vue-remixicon.svg?branch=master)](https://travis-ci.org/katalonne/vue-remixicon)
[![codebeat badge](https://codebeat.co/badges/299f68a9-8267-4f8d-a3e8-9abc5910f582)](https://codebeat.co/projects/github-com-katalonne-vue-remixicon-master)
[![GitHub open issues](https://img.shields.io/github/issues/katalonne/vue-remixicon.svg)](https://github.com/katalonne/vue-remixicon/issues?q=is%3Aopen+is%3Aissue)
[![npm version](https://img.shields.io/npm/v/vue-remixicon.svg)](https://www.npmjs.com/package/@katalonne/vue-remixicon)
[![MIT License](https://img.shields.io/github/license/katalonne/vue-remixicon.svg)](https://github.com/katalonne/vue-remixicon/blob/master/LICENSE)

Design icons sourced from the [remixicon](https://github.com/Remix-Design/RemixIcon/) project.

## Demo
[Vue remixicon](https://katalonne.github.io/vue-remixicon/)

## Installation
```bash
yarn add @katalonne/vue-remixicon

npm install --save @katalonne/vue-remixicon
```

## Usage

```javascript
import vueRemixicon from '@katalonne/vue-remixicon';

export default {
  components: {
    vueRemixicon
  }
}
```

```html
<vue-remixicon name='bank' size='sm' type='line' color="#fff"/>
```

## Props

| Property     | Type                      | Default |
|--------------|---------------------------|---------|
| name         | String                    |         |
| color        | String                    | #000    |
| type         | String ('fill' | 'line')  |         |
| size         | String                    | fw      |
| container    | String                    | div     |
| class-name   | String                    |         |
| styles       | Object                    | {}      |

## License

MIT © [katalonne](https://github.com/katalonne)