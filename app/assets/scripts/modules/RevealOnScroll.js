import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();        
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var self = this;
            new Waypoint({
                element: self,
                handler: () => {
                    $(self).addClass('reveal-item--is-visible');
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;