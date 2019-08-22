<template>
  <div>
    <p class="package-name">
      <svg
        class="vue-icon"
        viewBox="0 0 256 221"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
            fill="#35495E"
          ></path>
        </g>
      </svg>
      Vue Remixicon
      <vue-remixicon name='remixicon' size='fw' type='line' color="rgba(0,106,255,.8)"/>
    </p>
    <div class="container" v-highlight>
      <div class="usage">
        <i class="description">Usage:</i>
        <pre>
          <code class='html'>{{this.getUsageTemplate()}}</code>
        </pre>
      </div>
      <div class="all-icons">
        <div
          v-for="name in iconsNames"
          :content="name"
          v-tippy="{ arrow: true, arrowType: 'round', animation: 'scale' }"
          v-bind:key="name"
          class='icon-container'
        >
          <vue-remixicon size='fw' :name="name" :type="getType(name)" color="#fff" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueRemixicon from "../src/remixicon.js";
import { iconList, typeExceptions } from "../src/iconList.js";

export default {
  name: "app",
  components: {
    vueRemixicon
  },
  data() {
    return {
      columns: [
        {
          label: "Propriety",
          field: "name"
        },
        {
          label: "Type",
          field: "type"
        },
        {
          label: "Default",
          field: "default"
        }
      ],
      rows: [
        { name: "source", type: "String", default: "" },
        { name: "container", type: "String", default: `div` },
        { name: "class-name", type: "String", default: "" },
        { name: "options", type: "Object", default: {} }
      ].map((obj, index) => {
        obj.id = index;
        return obj;
      })
    };
  },
  computed: {
    iconsNames: function() { return iconList },
    typeExceptions: function () { return typeExceptions }
  },
  methods: {
    getUsageTemplate: function () {
      return `<vue-remixicon name='bank' size='fw' type='line' color="#fff"/>`;
    },
    getType: function(iconName) {
      return this.typeExceptions.includes(iconName) ? '' : 'line'
    }
  }
};
</script>

<style lang="scss">
html {
  background: #3798c5;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 0 30px 30px 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
.remarkable {
  background: rgba(#000, 0.2);
  border-radius: 10px;
  padding: 20px 0;
  margin-top: 45px;
}
.package-name {
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}
.vue-icon {
  path {
    transition: 200ms ease-in;
  }
}
.vue-icon {
  height: 30px;
  width: auto;
  &:hover {
    path {
      &:not(:last-of-type) {
        fill: rgb(53, 73, 94);
      }
      &:last-of-type {
        fill: rgb(65, 184, 131);
      }
    }
  }
}
.all-icons {
  width: 610px;
  margin: 0 auto;
  div {
    display: inline-block;
    padding: 14px;
    background: rgba(#000, 0);
    transition: 150ms linear;
    &:hover {
      background: rgba(#000, 0.3);
    }
  }
}
.container {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  width: 100%;
}
.container {
  text-align: center;
  display: inline-block;
  vertical-align: top;
}
.icon-container {
  font-size: 25px;
}
.usage {
  text-align: left;
  display: inline-block;
  vertical-align: top;
  pre {
    margin: 0;
  }
  code {
    text-align: left;
    padding: 20px 30px !important;
    width: 550px;
    margin: 0 auto;
    font-size: 14px !important;
  }
}

.description {
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  text-decoration: underline;
}

// Table styles
.vgt-responsive {
  overflow: hidden;
  border-radius: 10px;
  -webkit-box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  margin: 15px 0 25px 0;
}

::selection {
  color: darken(rgb(53, 73, 94), 10%);
  background: rgb(65, 184, 131);
}
</style>
