// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
define([
     'exports',
     '../../Core/_Base',
], function appBarConstantsInit(exports, _Base) {
    "use strict";

    _Base.Namespace._moduleDefine(exports, null, {
        // AppBar class names.
        appBarClass: "win-appbar",
        firstDivClass: "win-firstdiv",
        finalDivClass: "win-finaldiv",
        invokeButtonClass: "win-appbar-invokebutton",
        ellipsisClass: "win-appbar-ellipsis",
        primaryCommandsClass: "win-primarygroup",
        secondaryCommandsClass: "win-secondarygroup",
        reducedClass: "win-reduced",
        commandLayoutClass: "win-commandlayout",
        topClass: "win-top",
        bottomClass: "win-bottom",
        showingClass : "win-appbar-showing",
        shownClass : "win-appbar-shown",
        hidingClass : "win-appbar-hiding",
        hiddenClass: "win-appbar-hidden",
        minimalClass: "win-appbar-minimal",

        // Constants for AppBar placement
        appBarPlacementTop: "top",
        appBarPlacementBottom: "bottom",

        // Constants for AppBar layouts
        appBarLayoutCustom: "custom",
        appBarLayoutCommands: "commands",

        // Constant for AppBar invokebutton width
        appBarInvokeButtonWidth: 40,

        // Constants for Commands
        typeSeparator: "separator",
        typeContent: "content",
        typeButton: "button",
        typeToggle: "toggle",
        typeFlyout: "flyout",
        menuCommandClass: "win-command",
        appBarCommandClass: "win-command",
        appBarCommandGlobalClass: "win-global",
        appBarCommandSelectionClass: "win-selection",
        sectionSelection: "selection",
        sectionGlobal: "global",

        // Prevents the element from showing a focus rect
        hideFocusClass: "win-hidefocus",

        // Other class names
        overlayClass: "win-overlay",
        flyoutClass: "win-flyout",
        flyoutLightClass: "win-ui-light",
        menuClass: "win-menu",
        menuToggleClass: "win-menu-toggle",
        settingsFlyoutClass: "win-settingsflyout",
        scrollsClass: "win-scrolls",

        // Constants for AppBarCommand full-size widths.
        separatorWidth: 60,
        buttonWidth: 100,

        narrowClass: "win-narrow",
        wideClass: "win-wide",
        _clickEatingAppBarClass: "win-appbarclickeater",
        _clickEatingFlyoutClass: "win-flyoutmenuclickeater",
    });
});