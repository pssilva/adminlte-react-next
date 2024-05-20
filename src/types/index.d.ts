
import jQuery from "jquery";
import $ from 'jquery';

export {};

declare global {
  interface Window {
    $: jQuery; // 👈️ turn off type checking
    jQuery: jQuery; // 👈️ turn off type checking
  }

  let $ = window.$; // ok now
}