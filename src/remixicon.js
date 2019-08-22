import { iconList, typeExceptions } from './iconList';
import 'remixicon/fonts/remixicon.css';

export default {
  name: 'vue-remixicon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#000'
    },
    className: {
      type: String,
      default: ''
    },
    container: {
      type: String,
      default: 'i'
    },
    size: {
      type: String,
      default: 'fw'
    },
    styles: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String
    }
  },
  mounted () {
    // validations
    const iconExists = this.iconList.includes(this.name)
    if (!iconExists) throw new Error(`[vue-remixicon]: Icon name "${this.name}" - not found`)

    const isException = typeExceptions.includes(this.name)
    if (isException && Boolean(this.type)) this.type = undefined
    if (!isException && !(this.type == 'fill' || this.type == 'line')) throw new Error(`[vue-remixicon]: Prop :"type" can take only 'fill' or 'line' values for Icon "${this.name}"`)
  },
  computed: {
    iconList: function () { return iconList },
    typeExceptions: function () { return typeExceptions }
  },
  render () {
    const Container = this.container;
    return (
      <Container 
      class={`remixicon-${this.name}${this.type ? `-${this.type}` : ''} ri-${this.size} ${this.className}`}
      style={{
        color: this.color,
        ...this.styles
      }}
      >
      </Container>
    )
  }
}