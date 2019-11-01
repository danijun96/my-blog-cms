import CMS from "netlify-cms";

import  Bio  from '../components/bio';

CMS.registerWidget("Bio", Bio, Bio);

CMS.registerEditorComponent({
  // Internal id of the component
  id: "Bio",
  // Visible label
  label: "Bio",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: 'id',
    label: 'Bio Video ID',
    widget: 'string'
  }, {
    name: 'myHiddenField',
    label: 'My hidden field',
    widget: 'hidden'
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^Bio (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'Bio ' + obj.id;
  },
});