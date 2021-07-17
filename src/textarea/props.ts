/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-07-17 18:09:07
 * */

import { TdTextareaProps } from './type';
import { PropType } from 'vue';

export default {
  /** 自动聚焦 */
  autofocus: Boolean,
  /** 是否禁用文本框 */
  disabled: Boolean,
  /** 用户最多可以输入的字符个数 */
  maxlength: {
    type: Number,
    default: undefined,
  },
  /** 名称 */
  name: {
    type: String,
    default: '',
  },
  /** 占位符 */
  placeholder: {
    type: String,
    default: '',
  },
  /** 文本框是否只读 */
  readonly: Boolean,
  /** 文本框值 */
  value: {
    type: [String, Number] as PropType<TdTextareaProps['value']>,
  },
  /** 文本框值，非受控属性 */
  defaultValue: {
    type: [String, Number] as PropType<TdTextareaProps['defaultValue']>,
  },
  /** 失去焦点时触发 */
  onBlur: Function as PropType<TdTextareaProps['onBlur']>,
  /** 输入内容变化时触发 */
  onChange: Function as PropType<TdTextareaProps['onChange']>,
  /** 获得焦点时触发 */
  onFocus: Function as PropType<TdTextareaProps['onFocus']>,
  /** 键盘按下时触发 */
  onKeydown: Function as PropType<TdTextareaProps['onKeydown']>,
  /** 按下字符键时触发（keydown -> keypress -> keyup） */
  onKeypress: Function as PropType<TdTextareaProps['onKeypress']>,
  /** 释放键盘时触发 */
  onKeyup: Function as PropType<TdTextareaProps['onKeyup']>,
};
