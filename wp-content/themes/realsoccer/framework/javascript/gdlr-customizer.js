(function($){



var color_option = [

{name: "top-bar-text-color", selector: ".top-navigation-wrapper{ color: #gdlr#; }"},

{name: "top-bar-link-color", selector: ".top-navigation-wrapper a{ color: #gdlr#; }"},

{name: "main-navigation-background", selector: ".gdlr-navigation-wrapper{ background: #gdlr#; background: rgba(#gdlra#, 0.7); }"},

{name: "main-navigation-background-hover", selector: ".gdlr-main-menu > li:hover > a, .gdlr-main-menu > li.current-menu-item > a, .gdlr-main-menu > li.current-menu-ancestor > a{ background: #gdlr#; background: rgba(#gdlra#, 0.27); }"},

{name: "main-navigation-text", selector: ".gdlr-main-menu > li > a, #gdlr-menu-search-button{ color: #gdlr#; }"},

{name: "main-navigation-text-hover", selector: ".gdlr-main-menu > li:hover > a, .gdlr-main-menu > li.current-menu-item > a, .gdlr-main-menu > li.current-menu-ancestor > a{ color: #gdlr#; opacity: 1; filter: alpha(opacity=100); }"},

{name: "search-nav-background", selector: "#gdlr-menu-search{ background: #gdlr#; background: rgba(#gdlra#, 0.5); }"},

{name: "search-nav-text", selector: "#gdlr-menu-search input[type=\"text\"]{ color: #gdlr#; }"},

{name: "sub-menu-top-border", selector: ".gdlr-main-menu > .gdlr-normal-menu .sub-menu, .gdlr-main-menu > .gdlr-mega-menu .sf-mega{ border-top-color: #gdlr#; }"},

{name: "sub-menu-background", selector: ".gdlr-main-menu > .gdlr-normal-menu li , .gdlr-main-menu > .gdlr-mega-menu .sf-mega{ background-color: #gdlr#; }"},

{name: "sub-menu-text", selector: ".gdlr-main-menu > li > .sub-menu a, .gdlr-main-menu > li > .sf-mega a{ color: #gdlr#; }"},

{name: "sub-menu-text-hover", selector: ".gdlr-main-menu > li > .sub-menu a:hover, .gdlr-main-menu > li > .sub-menu .current-menu-item > a, .gdlr-main-menu > li > .sub-menu .current-menu-ancestor > a, .gdlr-main-menu > li > .sf-mega a:hover, .gdlr-main-menu > li > .sf-mega .current-menu-item > a, .gdlr-main-menu > li > .sf-mega .current-menu-ancestor > a{ color: #gdlr#; } .gdlr-main-menu .gdlr-normal-menu li > a.sf-with-ul:after { border-left-color: #gdlr#; } "},

{name: "sub-mega-menu-text-hover", selector: ".gdlr-main-menu .sf-mega-section-inner > ul > li > a:hover, .gdlr-main-menu .sf-mega-section-inner > ul > li.current-menu-item > a { background-color: #gdlr#; } "},

{name: "sub-menu-divider", selector: ".gdlr-main-menu > li > .sub-menu *, .gdlr-main-menu > li > .sf-mega *{ border-color: #gdlr#; }"},

{name: "sub-menu-mega-title", selector: ".gdlr-main-menu > li > .sf-mega .sf-mega-section-inner > a { color: #gdlr#; }"},

{name: "sub-menu-mega-title-hover", selector: ".gdlr-main-menu > li > .sf-mega .sf-mega-section-inner > a:hover, .gdlr-main-menu > li > .sf-mega .sf-mega-section-inner.current-menu-item > a, .gdlr-main-menu > li > .sf-mega .sf-mega-section-inner.current-menu-ancestor > a { color: #gdlr#; }"},

{name: "mobile-menu-background", selector: "#gdlr-responsive-navigation.dl-menuwrapper button { background-color: #gdlr#; }"},

{name: "mobile-menu-background-hover", selector: "#gdlr-responsive-navigation.dl-menuwrapper button:hover, #gdlr-responsive-navigation.dl-menuwrapper button.dl-active, #gdlr-responsive-navigation.dl-menuwrapper ul{ background-color: #gdlr#; }"},

{name: "body-background", selector: "body{ background-color: #gdlr#; }"},

{name: "container-backgrond", selector: ".body-wrapper, .gdlr-single-lightbox-container{ background-color: #gdlr#; }"},

{name: "page-title-color", selector: ".gdlr-page-title, .gdlr-page-title-gimmick{ color: #gdlr#; }"},

{name: "page-caption-color", selector: ".gdlr-page-caption{ color: #gdlr#; }"},

{name: "heading-color", selector: "h1, h2, h3, h4, h5, h6, .gdlr-title, .gdlr-title a{ color: #gdlr#; }"},

{name: "item-title-color", selector: ".gdlr-item-title-wrapper .gdlr-item-title, .gdlr-result-by-month-header{ color: #gdlr#; border-color: #gdlr#; }"},

{name: "item-title-line", selector: ".gdlr-item-title-divider{ border-color: #gdlr#; } .gdlr-item-title-wrapper.pos-left .gdlr-item-title:before, .gdlr-result-by-month-header:before{ color: #gdlr#; }"},

{name: "item-title-caption-color", selector: ".gdlr-item-title-wrapper .gdlr-item-caption{ color: #gdlr#; }"},

{name: "body-text-color", selector: "body{ color: #gdlr#; }"},

{name: "body-link-color", selector: "a{ color: #gdlr#; }"},

{name: "body-link-hover-color", selector: "a:hover{ color: #gdlr#; }"},

{name: "border-color", selector: "body *{ border-color: #gdlr#; }"},

{name: "404-box-background", selector: ".page-not-found-block{ background-color: #gdlr#; }"},

{name: "404-box-text", selector: ".page-not-found-block{ color: #gdlr#; }"},

{name: "404-search-background", selector: ".page-not-found-search .gdl-search-form input[type=\"text\"]{ background-color: #gdlr#; }"},

{name: "404-search-text", selector: ".page-not-found-search .gdl-search-form input[type=\"text\"]{ color: #gdlr#; }"},

{name: "sidebar-title-color", selector: ".gdlr-sidebar .gdlr-widget-title{ color: #gdlr#; }"},

{name: "sidebar-title-divider", selector: ".gdlr-sidebar .gdlr-widget-title:before{ color: #gdlr#; }"},

{name: "sidebar-border-color", selector: ".gdlr-sidebar *{ border-color: #gdlr#; }"},

{name: "sidebar-list-circle", selector: ".gdlr-sidebar ul li:before { border-color: #gdlr#; }"},

{name: "search-form-background", selector: ".gdl-search-form input{ background-color: #gdlr#; }"},

{name: "search-form-text-color", selector: ".gdl-search-form input{ color: #gdlr#; }"},

{name: "search-form-border-color", selector: ".gdl-search-form input{ border-color: #gdlr#; }"},

{name: "tag-cloud-background", selector: ".tagcloud a{ background-color: #gdlr#; }"},

{name: "tag-cloud-text", selector: ".tagcloud a, .tagcloud a:hover{ color: #gdlr#; }"},

{name: "featured-player-title-background", selector: ".feature-player-widget-title-wrapper{ background-color: #gdlr#; }"},

{name: "featured-player-title-text", selector: ".feature-player-widget-title, .feature-player-widget-position{ color: #gdlr#; }"},

{name: "featured-player-info-background", selector: ".feature-player-widget-info-wrapper{ background-color: #gdlr#; }"},

{name: "featured-player-info-text", selector: ".feature-player-widget-info-wrapper{ color: #gdlr#; }"},

{name: "accordion-text", selector: ".gdlr-accordion-item.style-1 .pre-active .accordion-title{ color: #gdlr#; }"},

{name: "accordion-title-active-color", selector: ".gdlr-accordion-item.style-1 .accordion-title{ color: #gdlr#; }"},

{name: "accordion-icon-background", selector: ".gdlr-accordion-item.style-1 .accordion-title i{ background-color: #gdlr#; }"},

{name: "accordion-icon-color", selector: ".gdlr-accordion-item.style-1 .accordion-title i{ color: #gdlr#; }"},

{name: "accordion-icon-active-background", selector: ".gdlr-accordion-item.style-1 .accordion-title i.icon-minus{ background-color: #gdlr#; }"},

{name: "accordion-icon-active-color", selector: ".gdlr-accordion-item.style-1 .accordion-title i.icon-minus{ color: #gdlr#; }"},

{name: "banner-icon-color", selector: ".gdlr-banner-item-wrapper .flex-direction-nav .flex-prev, .gdlr-banner-item-wrapper .flex-direction-nav .flex-next{ color: #gdlr#; }"},

{name: "box-with-icon-background", selector: ".gdlr-box-with-icon-item{ background-color: #gdlr#; }"},

{name: "box-with-icon-title", selector: ".gdlr-box-with-icon-item > i, .gdlr-box-with-icon-item .box-with-icon-title{ color: #gdlr#; }"},

{name: "box-with-icon-text", selector: ".gdlr-box-with-icon-item{ color: #gdlr#; }"},

{name: "button-text-color", selector: ".gdlr-button, .gdlr-button:hover, input[type=\"button\"], input[type=\"submit\"], .gdlr-top-menu > .gdlr-mega-menu .sf-mega a.gdlr-button{ color: #gdlr#; }"},

{name: "button-background-color", selector: ".gdlr-button, input[type=\"button\"], input[type=\"submit\"]{ background-color: #gdlr#; }"},

{name: "button-border-color", selector: ".gdlr-button{ border-color: #gdlr#; }"},

{name: "column-service-title-color", selector: ".column-service-title{ color: #gdlr#; }"},

{name: "column-service-content-color", selector: ".column-service-content{ color: #gdlr#; }"},

{name: "column-service-icon-color", selector: ".column-service-icon i{ color: #gdlr#; }"},

{name: "column-service-icon-background-color", selector: ".gdlr-column-service-item.gdlr-type-2 .column-service-icon{ background-color: #gdlr#; }"},

{name: "feature-media-caption-background", selector: ".gdlr-feature-media-item .feature-media-caption{ background-color: #gdlr#; }"},

{name: "feature-media-caption-text", selector: ".gdlr-feature-media-item .feature-media-caption{ color: #gdlr#; }"},

{name: "list-with-icon-title-color", selector: ".list-with-icon .list-with-icon-title{ color: #gdlr#; }"},

{name: "pie-chart-title-color", selector: ".gdlr-pie-chart-item .pie-chart-title{ color: #gdlr#; }"},

{name: "price-background", selector: ".gdlr-price-inner-item{ background-color: #gdlr#; }"},

{name: "price-title-background", selector: ".gdlr-price-item .price-title-wrapper{ background-color: #gdlr#; }"},

{name: "price-title-text", selector: ".gdlr-price-item .price-title{ color: #gdlr#; }"},

{name: "price-tag-background", selector: ".gdlr-price-item .price-tag{ background-color: #gdlr#; }"},

{name: "active-price-tag-background", selector: ".gdlr-price-item .best-price .price-tag{ background-color: #gdlr#; }"},

{name: "price-tag-text", selector: ".gdlr-price-item .price-tag{ color: #gdlr#; }"},

{name: "process-icon-background", selector: ".gdlr-process-tab .gdlr-process-icon{ background-color: #gdlr#; }"},

{name: "process-icon-border", selector: ".gdlr-process-tab .gdlr-process-icon{ border-color: #gdlr#; }"},

{name: "process-icon-color", selector: ".gdlr-process-tab .gdlr-process-icon i{ color: #gdlr#; }"},

{name: "process-line-color", selector: ".gdlr-process-tab .process-line .process-line-divider{ border-color: #gdlr#; } .gdlr-process-tab .process-line .icon-chevron-down, .gdlr-process-tab .process-line .icon-chevron-right{ color: #gdlr#; }"},

{name: "process-title-color", selector: ".gdlr-process-wrapper .gdlr-process-tab .gdlr-process-title{ color: #gdlr#; }"},

{name: "skill-text-color", selector: ".gdlr-skill-item-wrapper{ color: #gdlr#; }"},

{name: "stunning-text-title-color", selector: ".stunning-text-title{ color: #gdlr#; }"},

{name: "stunning-text-caption-color", selector: ".stunning-text-caption{ color: #gdlr#; }"},

{name: "stunning-text-background", selector: ".gdlr-stunning-text-item.with-padding{ background-color: #gdlr#; }"},

{name: "stunning-text-border", selector: ".gdlr-stunning-text-item.with-border{ border-color: #gdlr#; }"},

{name: "tab-title-background", selector: ".tab-title-wrapper .tab-title{ background-color: #gdlr#; }"},

{name: "tab-title-color", selector: ".tab-title-wrapper .tab-title{ color: #gdlr#; }"},

{name: "tab-title-content", selector: ".tab-title-wrapper .tab-title.active, .tab-content-wrapper{ background-color: #gdlr#; }"},

{name: "table-head-background", selector: "table tr th{ background-color: #gdlr#; }"},

{name: "table-head-text", selector: "table tr th{ color: #gdlr#; }"},

{name: "table-style2-odd-background", selector: "table.style-2 tr:nth-child(odd){ background-color: #gdlr#; }"},

{name: "table-style2-odd-text", selector: "table.style-2 tr:nth-child(odd){ color: #gdlr#; }"},

{name: "table-style2-even-background", selector: "table.style-2 tr:nth-child(even){ background-color: #gdlr#; }"},

{name: "table-style2-even-text", selector: "table.style-2 tr:nth-child(even){ color: #gdlr#; }"},

{name: "twitter-item-background", selector: ".gdlr-item.gdlr-twitter-item{ background-color: #gdlr#; }"},

{name: "twitter-item-border", selector: ".gdlr-item.gdlr-twitter-item{ border: 2px solid #gdlr#; }"},

{name: "twitter-item-text", selector: ".gdlr-twitter-item .gdlr-twitter:before, .gdlr-twitter-item .gdlr-twitter-time, .gdlr-twitter-item .flex-direction-nav a, .gdlr-twitter-item .flex-direction-nav a:hover{ color: #gdlr#; }"},

{name: "blog-title-color", selector: ".gdlr-blog-title, .gdlr-blog-title a{ color: #gdlr#; }"},

{name: "blog-title-hover-color", selector: ".gdlr-blog-title a:hover{ color: #gdlr#; }"},

{name: "blog-info-color", selector: ".blog-info, .blog-info a, .blog-info i{ color: #gdlr#; }"},

{name: "blog-sticky-background", selector: ".gdlr-blog-thumbnail .gdlr-sticky-banner{ background-color: #gdlr#; }"},

{name: "blog-sticky-text", selector: ".gdlr-blog-thumbnail .gdlr-sticky-banner, .gdlr-blog-thumbnail .gdlr-sticky-banner i{ color: #gdlr#; }"},

{name: "blog-share-background", selector: ".gdlr-social-share, .gdlr-social-share a{ background-color: #gdlr#; }"},

{name: "blog-share-title", selector: ".gdlr-social-share .social-share-title{ color: #gdlr#; }"},

{name: "blog-tag-background", selector: ".gdlr-standard-style .gdlr-single-blog-tag a{ background-color: #gdlr#; }"},

{name: "blog-tag-text-color", selector: ".gdlr-standard-style .gdlr-single-blog-tag a{ color: #gdlr#; }"},

{name: "blog-widget-date-background", selector: ".gdlr-blog-widget .blog-date-wrapper{ background-color: #gdlr#; }"},

{name: "blog-widget-date-text", selector: ".gdlr-blog-widget .blog-date-wrapper{ color: #gdlr#; }"},

{name: "blog-aside-background", selector: ".format-aside .gdlr-blog-content{ background-color: #gdlr#; }"},

{name: "blog-aside-text", selector: ".format-aside .gdlr-blog-content{ color: #gdlr#; }"},

{name: "blog-quote-text-color", selector: ".format-quote .gdlr-top-quote blockquote{ color: #gdlr#; }"},

{name: "blog-quote-author-color", selector: ".format-quote .gdlr-quote-author{ color: #gdlr#; }"},

{name: "blog-navigation-text", selector: ".gdlr-single-nav > div i{ color: #gdlr#; }"},

{name: "portfolio-filter-text", selector: ".portfolio-item-filter, .portfolio-item-filter a, .fixture-result-item-filter, .fixture-result-item-filter a, .player-item-filter, .player-item-filter a{ color: #gdlr#; } "},

{name: "portfolio-filter-active-text", selector: ".portfolio-item-filter a.active, .portfolio-item-filter a:hover, .fixture-result-item-filter a.active, .fixture-result-item-filter a:hover, .player-item-filter a.active, .player-item-filter a:hover{ color: #gdlr#; }"},

{name: "portfolio-thumbnail-hover-background", selector: ".gdlr-image-link-shortcode .gdlr-image-link-overlay, .portfolio-thumbnail .portfolio-overlay{ background-color: #gdlr#; }"},

{name: "portfolio-thumbnail-hover-icon-background", selector: ".gdlr-image-link-shortcode .gdlr-image-link-icon, .portfolio-thumbnail .portfolio-overlay-wrapper .portfolio-icon{ background-color: #gdlr#; }"},

{name: "portfolio-thumbnail-hover-icon", selector: ".gdlr-image-link-shortcode .gdlr-image-link-overlay-wrapper i, .portfolio-thumbnail .portfolio-overlay-wrapper i{ color: #gdlr#; }"},

{name: "portfolio-title-color", selector: ".portfolio-title a{ color: #gdlr#; }"},

{name: "portfolio-title-hover-color", selector: ".portfolio-title a:hover{ color: #gdlr#; }"},

{name: "portfolio-info-color", selector: ".portfolio-info, .portfolio-info a{ color: #gdlr#; }"},

{name: "modern-portfolio-title-color", selector: ".portfolio-item-holder .gdlr-modern-portfolio .portfolio-title a{ color: #gdlr#; }"},

{name: "modern-portfolio-title-background", selector: ".portfolio-item-holder .gdlr-modern-portfolio .portfolio-title a{ background: #gdlr#; }"},

{name: "modern-portfolio-title-hover-color", selector: ".portfolio-item-holder .gdlr-modern-portfolio .portfolio-title a:hover{ color: #gdlr#; }"},

{name: "modern-portfolio-title-hover-background", selector: ".portfolio-item-holder .gdlr-modern-portfolio .portfolio-title a:hover{ background: #gdlr#; }"},

{name: "modern-portfolio-tag-color", selector: ".portfolio-item-holder .gdlr-modern-portfolio .portfolio-info, .portfolio-item-holder .gdlr-modern-portfolio .portfolio-info a{ color: #gdlr#; }"},

{name: "pagination-background", selector: ".gdlr-pagination .page-numbers{ background-color: #gdlr#; }"},

{name: "pagination-text-color", selector: ".gdlr-pagination .page-numbers{ color: #gdlr#; }"},

{name: "pagination-background-hover", selector: ".gdlr-pagination .page-numbers:hover, .gdlr-pagination .page-numbers.current{ background-color: #gdlr#; }"},

{name: "pagination-text-color-hover", selector: ".gdlr-pagination .page-numbers:hover, .gdlr-pagination .page-numbers.current{ color: #gdlr#; }"},

{name: "player-general-info-background", selector: ".gdlr-soccer-player-general-info-wrapper{ background-color: #gdlr#; } "},

{name: "player-general-info-text", selector: ".gdlr-soccer-player-general-info-right, .single-player .gdlr-soccer-player-title, .single-player .gdlr-soccer-player-title-info{ color: #gdlr#; } "},

{name: "player-overall-tab", selector: ".gdlr-soccer-player-tab-title-wrapper{ background-color: #gdlr#; } "},

{name: "player-overall-tab-text", selector: ".gdlr-soccer-player-tab-title-wrapper, .gdlr-soccer-player-tab-title-wrapper a{ color: #gdlr#; } "},

{name: "player-overall-tab-text-hover", selector: ".gdlr-soccer-player-tab-title-wrapper a:hover, .gdlr-soccer-player-tab-title-wrapper a.active{ color: #gdlr#; } "},

{name: "player-overall-stat-list-background", selector: ".gdlr-soccer-tab-player-info li { background-color: #gdlr#; } "},

{name: "player-overall-stat-list-border", selector: ".gdlr-soccer-tab-player-info li { border-top-color: #gdlr#; } "},

{name: "player-overall-stat-list-color", selector: ".gdlr-soccer-tab-player-info li { color: #gdlr#; } "},

{name: "player-stat-tab-top-border", selector: ".gdlr-soccer-single-player-stats-tab.gdlr-item{ border-top-color: #gdlr#; } "},

{name: "player-stat-tab-text", selector: ".gdlr-soccer-single-player-stats-tab, .gdlr-soccer-single-player-stats-tab a{ color: #gdlr#; } "},

{name: "player-stat-tab-text-hover", selector: ".gdlr-soccer-single-player-stats-tab a:hover, .gdlr-soccer-single-player-stats-tab a.active{ color: #gdlr#; } "},

{name: "player-stat-list-background", selector: ".gdlr-soccer-tab-player-stats li { background-color: #gdlr#; } "},

{name: "player-stat-list-border", selector: ".gdlr-soccer-tab-player-stats li { border-top-color: #gdlr#; } "},

{name: "player-stat-list-color", selector: ".gdlr-soccer-tab-player-stats li { color: #gdlr#; } "},

{name: "player-item-overlay", selector: ".gdlr-modern-player .gdlr-modern-player-item-overlay, .gdlr-classic-player .gdlr-soccer-player-thumbnail{ background-color: #gdlr#; } "},

{name: "classic-player-item-title", selector: ".gdlr-classic-player .gdlr-soccer-player-squad, .gdlr-classic-player .gdlr-soccer-player-title a{ color: #gdlr#; } "},

{name: "classic-player-item-info", selector: ".gdlr-classic-player .gdlr-soccer-player-position{ color: #gdlr#; } "},

{name: "modern-player-item-overlay-text", selector: ".gdlr-modern-player .gdlr-modern-player-item-content, .gdlr-modern-player .gdlr-modern-player-item-content a, .gdlr-modern-player .gdlr-modern-player-item-content a:hover{ color: #gdlr#; } "},

{name: "single-result-bar-text", selector: ".gdlr-soccer-match-results-wrapper{ color: #gdlr#; } "},

{name: "single-result-bar-background", selector: ".gdlr-soccer-match-results-overlay{ background-color: #gdlr#; } "},

{name: "upcoming-match-overlay", selector: ".upcoming-match-overlay{ background-color: #gdlr#; } "},

{name: "upcoming-match-info-overlay", selector: ".upcoming-match-info-overlay{ background-color: #gdlr#; } "},

{name: "upcoming-match-text", selector: ".upcoming-match-item-wrapper, .upcoming-match-item-wrapper a{ color: #gdlr#; } "},

{name: "small-result-even-row-background", selector: ".small-result-item.even, .result-in-month.even{ background-color: #gdlr#; } "},

{name: "small-result-odd-row-background", selector: ".small-result-item.odd, .result-in-month.odd{ background-color: #gdlr#; } "},

{name: "small-league-table-head-background", selector: ".gdlr-small-league-table th{ background-color: #gdlr#; } .gdlr-small-league-table tr:first-child{ border-color: #gdlr#; }"},

{name: "small-league-table-head-text", selector: ".gdlr-small-league-table th{ color: #gdlr#; } "},

{name: "small-league-table-background", selector: ".gdlr-small-league-table{ background-color: #gdlr#; } "},

{name: "small-league-table-border", selector: ".gdlr-small-league-table *{ border-color: #gdlr#; } "},

{name: "league-table-head-text", selector: ".gdlr-league-table tr th{ color: #gdlr#; } "},

{name: "league-table-head-border", selector: ".gdlr-league-table tr th{ border-color: #gdlr#; } "},

{name: "league-table-top-head-background", selector: ".gdlr-league-table .gdlr-table-first-head th{ background-color: #gdlr#; } "},

{name: "league-table-second-head-background", selector: ".gdlr-league-table .gdlr-table-second-head th{ background-color: #gdlr#; } "},

{name: "league-table-border", selector: ".gdlr-league-table tr td{ border-color: #gdlr#; } "},

{name: "league-table-even-background", selector: ".gdlr-league-table tr:nth-child(even) td{ background-color: #gdlr#; } "},

{name: "league-table-odd-background", selector: ".gdlr-league-table tr:nth-child(odd) td{ background-color: #gdlr#; } "},

{name: "personnel-box-background", selector: ".gdlr-personnel-item .personnel-item-inner{ background-color: #gdlr#; }"},

{name: "round-personnel-hover-background", selector: ".gdlr-personnel-item.round-style .personnel-item{ background-color: #gdlr#; }"},

{name: "personnel-author-text", selector: ".gdlr-personnel-item .personnel-author{ color: #gdlr#; }"},

{name: "personnel-author-border", selector: ".gdlr-personnel-item .personnel-author-image{ border-color: #gdlr#; }"},

{name: "personnel-position-color", selector: ".gdlr-personnel-item .personnel-position{ color: #gdlr#; }"},

{name: "personnel-content-color", selector: ".gdlr-personnel-item .personnel-content{ color: #gdlr#; }"},

{name: "personnel-social-icon-color", selector: ".gdlr-personnel-item .personnel-social i{ color: #gdlr#; }"},

{name: "testimonial-box-background", selector: ".gdlr-testimonial-item .testimonial-item-inner, .gdlr-testimonial-item .testimonial-author-image{ background-color: #gdlr#; }"},

{name: "testimonial-content-color", selector: ".gdlr-testimonial-item .testimonial-content{ color: #gdlr#; }"},

{name: "testimonial-author-text", selector: ".gdlr-testimonial-item .testimonial-author{ color: #gdlr#; }"},

{name: "testimonial-author-position", selector: ".gdlr-testimonial-item .testimonial-position{ color: #gdlr#; }"},

{name: "testimonial-author-image-border", selector: ".gdlr-testimonial-item .testimonial-author-image{ border-color: #gdlr#; }"},

{name: "testimonial-boxed-style-shadow", selector: ".gdlr-testimonial-item.box-style .testimonial-item-inner:after{ border-top-color: #gdlr#; border-left-color: #gdlr#; }"},

{name: "gallery-thumbnail-frame", selector: ".gdlr-gallery-thumbnail .gallery-item{ background-color: #gdlr#; }"},

{name: "gallery-caption-background", selector: ".gdlr-gallery-thumbnail-container .gallery-caption{ background-color: #gdlr#; }"},

{name: "gallery-caption-text", selector: ".gdlr-gallery-thumbnail-container .gallery-caption{ color: #gdlr#; }"},

{name: "slider-bullet-background", selector: ".nivo-controlNav a, .flex-control-paging li a{ background-color: #gdlr#; }"},

{name: "slider-bullet-background-hover", selector: ".nivo-controlNav a:hover, .nivo-controlNav a.active, .flex-control-paging li a:hover, .flex-control-paging li a.flex-active { background-color: #gdlr#; }"},

{name: "slider-bullet-border", selector: ".nivo-controlNav a, .flex-control-paging li a{ border-color: #gdlr# !important; }"},

{name: "slider-navigation-background", selector: ".nivo-directionNav a, .flex-direction-nav a, .ls-flawless .ls-nav-prev, .ls-flawless .ls-nav-next{ background-color: #gdlr#; }"},

{name: "slider-navigation-icon", selector: "body .nivo-directionNav a, body .flex-direction-nav a, body .flex-direction-nav a:hover, .ls-flawless .ls-nav-prev, .ls-flawless .ls-nav-next{ color: #gdlr#; }"},

{name: "slider-caption-background", selector: ".gdlr-caption{ background-color: #gdlr#; }"},

{name: "slider-caption-title", selector: ".gdlr-caption-title{ color: #gdlr#; }"},

{name: "slider-caption-text", selector: ".gdlr-caption-text{ color: #gdlr#; }"},

{name: "post-slider-caption-background", selector: ".gdlr-caption-wrapper.post-slider{ background-color: #gdlr#; }"},

{name: "post-slider-caption-title", selector: ".gdlr-caption-wrapper.post-slider .gdlr-caption-title{ color: #gdlr#; }"},

{name: "post-slider-caption-text", selector: ".gdlr-caption-wrapper.post-slider .gdlr-caption-text{ color: #gdlr#; }"},

{name: "post-slider-date-text", selector: ".gdlr-post-slider-item.style-no-excerpt .gdlr-caption-wrapper .gdlr-caption-date, .gdlr-post-slider-item.style-no-excerpt .gdlr-caption-wrapper .gdlr-title-link{ color: #gdlr#; }"},

{name: "post-slider-date-background", selector: ".gdlr-post-slider-item.style-no-excerpt .gdlr-caption-wrapper .gdlr-caption-date, .gdlr-post-slider-item.style-no-excerpt .gdlr-caption-wrapper .gdlr-title-link{ background-color: #gdlr#; }"},

{name: "slider-outer-nav-background", selector: ".gdlr-item-title-wrapper .gdlr-flex-prev, .gdlr-item-title-wrapper .gdlr-flex-next{ background-color: #gdlr#; }"},

{name: "slider-outer-nav-icon", selector: ".gdlr-item-title-wrapper .gdlr-flex-prev, .gdlr-item-title-wrapper .gdlr-flex-next{ color: #gdlr#; }"},

{name: "input-box-background", selector: "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"], textarea{ background-color: #gdlr#; }"},

{name: "input-box-text", selector: "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"], textarea{ color: #gdlr#; }input::input-placeholder{ color:#gdlr#; } input::-webkit-input-placeholder{ color:#gdlr#; }input::-moz-placeholder{ color:#gdlr#; } input:-moz-placeholder{ color:#gdlr#; }input:-ms-input-placeholder{ color:#gdlr#; }textarea::input-placeholder{ color:#gdlr#; } textarea::-webkit-input-placeholder{ color:#gdlr#; }textarea::-moz-placeholder{ color:#gdlr#; } textarea:-moz-placeholder{ color:#gdlr#; }textarea:-ms-input-placeholder{ color:#gdlr#; }"},

{name: "footer-background-color", selector: ".footer-wrapper{ background-color: #gdlr#; }"},

{name: "footer-title-color", selector: ".footer-wrapper .gdlr-widget-title, .footer-wrapper .gdlr-widget-title a{ color: #gdlr#; }"},

{name: "footer-text-color", selector: ".footer-wrapper{ color: #gdlr#; }"},

{name: "footer-link-color", selector: ".footer-wrapper a{ color: #gdlr#; }"},

{name: "footer-link-hover-color", selector: ".footer-wrapper a:hover{ color: #gdlr#; }"},

{name: "footer-border-color", selector: ".footer-wrapper *{ border-color: #gdlr#; }"},

{name: "footer-input-box-background", selector: ".footer-wrapper input[type=\"text\"], .footer-wrapper input[type=\"email\"], .footer-wrapper input[type=\"password\"], .footer-wrapper textarea{ background-color: #gdlr#; }"},

{name: "footer-input-box-text", selector: ".footer-wrapper input[type=\"text\"], .footer-wrapper input[type=\"email\"], .footer-wrapper input[type=\"password\"], .footer-wrapper textarea{ color: #gdlr#; }"},

{name: "footer-input-box-border", selector: ".footer-wrapper input[type=\"text\"], .footer-wrapper input[type=\"email\"], .footer-wrapper input[type=\"password\"], .footer-wrapper textarea{ border-color: #gdlr#; }"},

{name: "footer-button-text-color", selector: ".footer-wrapper .gdlr-button, .footer-wrapper .gdlr-button:hover, .footer-wrapper input[type=\"button\"], .footer-wrapper input[type=\"submit\"]{ color: #gdlr#; }"},

{name: "footer-button-background-color", selector: ".footer-wrapper .gdlr-button, .footer-wrapper input[type=\"button\"], .footer-wrapper input[type=\"submit\"]{ background-color: #gdlr#; }"},

{name: "footer-tag-cloud-background", selector: ".footer-wrapper .tagcloud a{ background-color: #gdlr#; }"},

{name: "footer-tag-cloud-text", selector: ".footer-wrapper .tagcloud a, .footer-wrapper .tagcloud a:hover{ color: #gdlr#; }"},

{name: "gdlr-copyright-background", selector: ".copyright-wrapper{ background-color: #gdlr#; }"},

{name: "gdlr-copyright-text-color", selector: ".copyright-wrapper{ color: #gdlr#; }"},

{name: "gdlr-copyright-top-border", selector: ".footer-wrapper .copyright-wrapper{ border-color: #gdlr#; }"},

{name: "woo-theme-color", selector: "html .woocommerce span.onsale, html .woocommerce-page span.onsale, html .woocommerce-message,html .woocommerce div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce #content div.product .woocommerce-tabs ul.tabs li.active,html .woocommerce-page div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active { background: #gdlr#; }html .woocommerce .star-rating, html .woocommerce-page .star-rating, html .woocommerce .star-rating:before, html .woocommerce-page .star-rating:before, html .woocommerce div.product span.price, html .woocommerce div.product p.price, html .woocommerce #content div.product span.price, html .woocommerce #content div.product p.price, html .woocommerce-page div.product span.price, html .woocommerce-page div.product p.price, html .woocommerce-page #content div.product span.price, html .woocommerce-page #content div.product p.price {color: #gdlr#; }"},

{name: "woo-text-in-element-color", selector: "html .woocommerce-message a.button, html .woocommerce-error a.button, html .woocommerce-info a.button, html .woocommerce-message, html .woocommerce-error, html .woocommerce-info, html .woocommerce span.onsale, html .woocommerce-page span.onsale, html .woocommerce div.product .woocommerce-tabs ul.tabs li.active,html .woocommerce #content div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce-page div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce nav.woocommerce-pagination ul li span.current, html .woocommerce-page nav.woocommerce-pagination ul li span.current, html .woocommercenav.woocommerce-pagination ul li a:hover, html .woocommerce-page nav.woocommerce-pagination ul li a:hover{ color: #gdlr#; }"},

{name: "woo-notification-background", selector: "html .woocommerce-info{ background: #gdlr#; }"},

{name: "woo-error-background", selector: "html .woocommerce-error{ background: #gdlr#; }"},

{name: "woo-button-background", selector: "html .woocommerce a.button.alt:hover, html .woocommerce button.button.alt:hover, html .woocommerce input.button.alt:hover, html .woocommerce #respond input#submit.alt:hover, html .woocommerce #content input.button.alt:hover, html .woocommerce-page a.button.alt:hover, html .woocommerce-page button.button.alt:hover, html .woocommerce-page input.button.alt:hover, html .woocommerce-page #respond input#submit.alt:hover, html .woocommerce-page #content input.button.alt:hover, html .woocommerce a.button.alt, html .woocommerce button.button.alt, html .woocommerce input.button.alt, html .woocommerce #respond input#submit.alt, html .woocommerce #content input.button.alt, html .woocommerce-page a.button.alt, html .woocommerce-page button.button.alt, html .woocommerce-page input.button.alt, html .woocommerce-page #respond input#submit.alt, html .woocommerce-page #content input.button.alt, html .woocommerce a.button, html .woocommerce button.button, html .woocommerce input.button, html .woocommerce #respond input#submit, html .woocommerce #content input.button, html .woocommerce-page a.button, html .woocommerce-page button.button, html .woocommerce-page input.button, html .woocommerce-page #respond input#submit, html .woocommerce-page #content input.button, html .woocommerce a.button:hover, html .woocommerce button.button:hover, html .woocommerce input.button:hover, html .woocommerce #respond input#submit:hover, html .woocommerce #content input.button:hover, html .woocommerce-page a.button:hover, html .woocommerce-page button.button:hover, html .woocommerce-page input.button:hover, html .woocommerce-page #respond input#submit:hover, html .woocommerce-page #content input.button:hover, html .woocommerce ul.products li.product a.loading, html .woocommerce div.product form.cart .button, html .woocommerce #content div.product form.cart .button, html .woocommerce-page div.product form.cart .button, html .woocommerce-page #content div.product form.cart .button{ background: #gdlr#; }"},

{name: "woo-button-text", selector: "html .woocommerce a.button.alt:hover, html .woocommerce button.button.alt:hover, html .woocommerce input.button.alt:hover, html .woocommerce #respond input#submit.alt:hover, html .woocommerce #content input.button.alt:hover, html .woocommerce-page a.button.alt:hover, html .woocommerce-page button.button.alt:hover, html .woocommerce-page input.button.alt:hover, html .woocommerce-page #respond input#submit.alt:hover, html .woocommerce-page #content input.button.alt:hover, html .woocommerce a.button.alt, html .woocommerce button.button.alt, html .woocommerce input.button.alt, html .woocommerce #respond input#submit.alt, html .woocommerce #content input.button.alt, html .woocommerce-page a.button.alt, html .woocommerce-page button.button.alt, html .woocommerce-page input.button.alt, html .woocommerce-page #respond input#submit.alt, html .woocommerce-page #content input.button.alt, html .woocommerce a.button, html .woocommerce button.button, html .woocommerce input.button, html .woocommerce #respond input#submit, html .woocommerce #content input.button, html .woocommerce-page a.button, html .woocommerce-page button.button, html .woocommerce-page input.button, html .woocommerce-page #respond input#submit, html .woocommerce-page #content input.button, html .woocommerce a.button:hover, html .woocommerce button.button:hover, html .woocommerce input.button:hover, html .woocommerce #respond input#submit:hover, html .woocommerce #content input.button:hover, html .woocommerce-page a.button:hover, html .woocommerce-page button.button:hover, html .woocommerce-page input.button:hover, html .woocommerce-page #respond input#submit:hover, html .woocommerce-page #content input.button:hover, html .woocommerce ul.products li.product a.loading, html .woocommerce div.product form.cart .button, html .woocommerce #content div.product form.cart .button, html .woocommerce-page div.product form.cart .button, html .woocommerce-page #content div.product form.cart .button{ color: #gdlr#; }"},

{name: "woo-button-bottom-border", selector: "html .woocommerce a.button.alt:hover, html .woocommerce button.button.alt:hover, html .woocommerce input.button.alt:hover, html .woocommerce #respond input#submit.alt:hover, html .woocommerce #content input.button.alt:hover, html .woocommerce-page a.button.alt:hover, html .woocommerce-page button.button.alt:hover, html .woocommerce-page input.button.alt:hover, html .woocommerce-page #respond input#submit.alt:hover, html .woocommerce-page #content input.button.alt:hover, html .woocommerce a.button.alt, html .woocommerce button.button.alt, html .woocommerce input.button.alt, html .woocommerce #respond input#submit.alt, html .woocommerce #content input.button.alt, html .woocommerce-page a.button.alt, html .woocommerce-page button.button.alt, html .woocommerce-page input.button.alt, html .woocommerce-page #respond input#submit.alt, html .woocommerce-page #content input.button.alt, html .woocommerce a.button, html .woocommerce button.button, html .woocommerce input.button, html .woocommerce #respond input#submit, html .woocommerce #content input.button, html .woocommerce-page a.button, html .woocommerce-page button.button, html .woocommerce-page input.button, html .woocommerce-page #respond input#submit, html .woocommerce-page #content input.button, html .woocommerce a.button:hover, html .woocommerce button.button:hover, html .woocommerce input.button:hover, html .woocommerce #respond input#submit:hover, html .woocommerce #content input.button:hover, html .woocommerce-page a.button:hover, html .woocommerce-page button.button:hover, html .woocommerce-page input.button:hover, html .woocommerce-page #respond input#submit:hover, html .woocommerce-page #content input.button:hover, html .woocommerce ul.products li.product a.loading, html .woocommerce div.product form.cart .button, html .woocommerce #content div.product form.cart .button, html .woocommerce-page div.product form.cart .button, html .woocommerce-page #content div.product form.cart .button{ border-bottom: 3px solid #gdlr#; }"},

{name: "woo-border-color", selector: "html .woocommerce #reviews #comments ol.commentlist li img.avatar, html .woocommerce-page #reviews #comments ol.commentlist li img.avatar { background: #gdlr#; }html .woocommerce #reviews #comments ol.commentlist li img.avatar, html .woocommerce-page #reviews #comments ol.commentlist li img.avatar,html .woocommerce #reviews #comments ol.commentlist li .comment-text, html .woocommerce-page #reviews #comments ol.commentlist li .comment-text,html .woocommerce ul.products li.product a img, html .woocommerce-page ul.products li.product a img, html .woocommerce ul.products li.product a img:hover ,html .woocommerce-page ul.products li.product a img:hover, html .woocommerce-page div.product div.images img, html .woocommerce-page #content div.product div.images img,html .woocommerce form.login, html .woocommerce form.checkout_coupon, html .woocommerce form.register, html .woocommerce-page form.login,html .woocommerce-page form.checkout_coupon, html .woocommerce-page form.register, html .woocommerce table.cart td.actions .coupon .input-text,html .woocommerce #content table.cart td.actions .coupon .input-text, html .woocommerce-page table.cart td.actions .coupon .input-text,html .woocommerce-page #content table.cart td.actions .coupon .input-text { border: 1px solid #gdlr#; }html .woocommerce div.product .woocommerce-tabs ul.tabs:before, html .woocommerce #content div.product .woocommerce-tabs ul.tabs:before,html .woocommerce-page div.product .woocommerce-tabs ul.tabs:before, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs:before,html .woocommerce table.shop_table tfoot td, html .woocommerce table.shop_table tfoot th, html .woocommerce-page table.shop_table tfoot td,html .woocommerce-page table.shop_table tfoot th, html .woocommerce table.shop_table tfoot td, html .woocommerce table.shop_table tfoot th,html .woocommerce-page table.shop_table tfoot td, html .woocommerce-page table.shop_table tfoot th { border-bottom: 1px solid #gdlr#; }html .woocommerce .cart-collaterals .cart_totals table tr:first-child th, html .woocommerce .cart-collaterals .cart_totals table tr:first-child td,html .woocommerce-page .cart-collaterals .cart_totals table tr:first-child th, html .woocommerce-page .cart-collaterals .cart_totals table tr:first-child td { border-top: 3px #gdlr# solid; }html .woocommerce .cart-collaterals .cart_totals tr td, html .woocommerce .cart-collaterals .cart_totals tr th,html .woocommerce-page .cart-collaterals .cart_totals tr td, html .woocommerce-page .cart-collaterals .cart_totals tr th { border-bottom: 2px solid #gdlr#; }"},

{name: "woo-secondary-elements", selector: "html .woocommerce div.product .woocommerce-tabs ul.tabs li, html .woocommerce #content div.product .woocommerce-tabs ul.tabs li, html .woocommerce-page div.product .woocommerce-tabs ul.tabs li, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li ,html .woocommerce table.cart a.remove, html .woocommerce #content table.cart a.remove, html .woocommerce-page table.cart a.remove, html .woocommerce-page #content table.cart a.remove, html .woocommerce #payment, html .woocommerce-page #payment, html .woocommerce .customer_details,html .woocommerce ul.order_details, html .woocommerce nav.woocommerce-pagination ul li a, html .woocommerce-page nav.woocommerce-pagination ul li a,html .woocommerce form .form-row input.input-text, html .woocommerce form .form-row textarea, html .woocommerce-page form .form-row input.input-text, html .woocommerce-page form .form-row textarea, html .woocommerce .quantity input.qty, html .woocommerce #content .quantity input.qty, html .woocommerce-page .quantity input.qty, html .woocommerce-page #content .quantity input.qty,html .woocommerce .widget_shopping_cart .total, html .woocommerce-page .widget_shopping_cart .total { background: #gdlr#; }html .woocommerce .quantity input.qty, html .woocommerce #content .quantity input.qty, html .woocommerce-page .quantity input.qty, html .woocommerce-page #content .quantity input.qty { border: 1px solid #gdlr#; }"},

{name: "woo-secondary-elements-border", selector: "html .woocommerce .widget_shopping_cart .total, html .woocommerce-page .widget_shopping_cart .total { border-top: 2px solid #gdlr#; }html .woocommerce table.cart a.remove:hover, html .woocommerce #content table.cart a.remove:hover, html .woocommerce-page table.cart a.remove:hover,html .woocommerce-page #content table.cart a.remove:hover, html #payment div.payment_box, html .woocommerce-page #payment div.payment_box { background: #gdlr#; }"},

{name: "woo-cart-summary-price", selector: "html .woocommerce table.shop_table tfoot td, html .woocommerce table.shop_table tfoot th, html .woocommerce-page table.shop_table tfoot td,html .woocommerce-page table.shop_table tfoot th, .cart-subtotal th, .shipping th , .total th, html .woocommerce table.shop_attributes .alt th,html .woocommerce-page table.shop_attributes .alt th, html .woocommerce ul.products li.product .price, html.woocommerce-page ul.products li.product .price { color: #gdlr#; }"},

{name: "woo-discount-price", selector: "html .woocommerce ul.products li.product .price del, html .woocommerce-page ul.products li.product .price del,html .woocommerce table.cart a.remove, html .woocommerce #content table.cart a.remove, html .woocommerce-page table.cart a.remove,html .woocommerce-page #content table.cart a.remove { color: #gdlr#; }"},

{name: "woo-plus-minus-product-border", selector: "html .woocommerce .quantity .plus, html .woocommerce .quantity .minus, html .woocommerce #content .quantity .plus, html .woocommerce #content .quantity .minus, html .woocommerce-page .quantity .plus, html .woocommerce-page .quantity .minus, html .woocommerce-page #content .quantity .plus, html .woocommerce-page #content .quantity .minus { border: 1px solid #gdlr#; }"},

{name: "woo-plus-minus-product-sign", selector: "html .woocommerce .quantity .plus, html .woocommerce .quantity .minus, html .woocommerce #content .quantity .plus, html .woocommerce #content .quantity .minus, html .woocommerce-page .quantity .plus, html .woocommerce-page .quantity .minus, html .woocommerce-page #content .quantity .plus, html .woocommerce-page #content .quantity .minus { color: #gdlr#; }"},

{name: "woo-plus-product-background", selector: "html .woocommerce .quantity .plus, html .woocommerce #content .quantity .plus, html .woocommerce-page .quantity .plus,html .woocommerce-page #content .quantity .plus, html .woocommerce .quantity .plus:hover, html .woocommerce #content .quantity .plus:hover,html .woocommerce-page .quantity .plus:hover, html .woocommerce-page #content .quantity .plus:hover{ background: #gdlr#; }"},

{name: "woo-minus-product-background", selector: "html .woocommerce .quantity .minus, html .woocommerce #content .quantity .minus, html .woocommerce-page .quantity .minus,html .woocommerce-page #content .quantity .minus, html .woocommerce .quantity .minus:hover, html .woocommerce #content .quantity .minus:hover,html .woocommerce-page .quantity .minus:hover, html .woocommerce-page #content .quantity .minus:hover{ background: #gdlr#; }"},

];

	

	var customizer_style = $('<style id="customizer-style"></style>');

	$("head").append(customizer_style);	

	

	function generate_dynamic_style(index, value){

		color_option[index].style = color_option[index].selector.replace('#gdlr#', value);

		

		var new_style = '';

		for(var i=0; i<color_option.length; i++){

			if(color_option[i].style){

				new_style += color_option[i].style + '\r\n';

			}

		}

		customizer_style.html(new_style);

	}

	

	// Theme Color Option

	$.each(color_option, function(index, value){

		wp.customize('gdlr_customizer[' + value.name + ']', function(value){

			value.bind(function(to){

				generate_dynamic_style(index, to);

			});

		});		

	

	});

	

	// Site title and description.

	wp.customize('blogname', function(value){

		value.bind(function(to){

			$('.site-title').text(to);

		});

	});

	wp.customize('blogdescription', function(value){

		value.bind(function(to){

			$('.site-description').text(to);

		});

	});

	

})(jQuery);