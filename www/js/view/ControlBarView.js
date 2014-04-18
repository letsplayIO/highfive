define(['lib/knockout'], function (ko) {

    function ControlBarView(showLayerTool, zoomLevel) {
        var self = this;
        this.isPlay = ko.observable(false);

        this.isPause = ko.computed(function () {
            return !self.isPlay();
        });
        this.isPlayPointerActive = ko.observable(true);
        this.isBuildPointerActive = ko.observable(false);
        this.isGhostMappingActive = ko.observable(false);
        this.showEntityTool = showLayerTool;
        this.zoomLevel = zoomLevel;
    }

    ControlBarView.prototype.playPointer = function () {
        this.isPlayPointerActive(true);
        this.isBuildPointerActive(false);
    };

    ControlBarView.prototype.buildPointer = function () {
        this.isBuildPointerActive(true);
        this.isPlayPointerActive(false);
    };

    ControlBarView.prototype.togglePlay = function () {
        this.isPlay(!this.isPlay());
    };

    ControlBarView.prototype.toggleGhostMapping = function () {
        this.isGhostMappingActive(!this.isGhostMappingActive());
    };

    ControlBarView.prototype.toggleShowEntityTool = function () {
        this.showEntityTool(!this.showEntityTool());
    };

    ControlBarView.prototype.exportStuff = function () {
        console.log("export the stuff");
    };

    ControlBarView.prototype.zoomIn = function () {
        this.zoomLevel(this.zoomLevel() + 25);
    };

    ControlBarView.prototype.zoomOut = function () {
        this.zoomLevel(this.zoomLevel() - 25);
    };

    return ControlBarView;
});