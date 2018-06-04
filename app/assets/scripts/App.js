import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-items'), "85%");
new RevealOnScroll($('.testimonial'), "65%");

var stickyHeader = new StickyHeader();
var modal = new Modal();