<template>
  <div>
    <nav
      class="st-nav navbar main-nav navigation transparent dark-link"
      id="main-nav"
    >
      <div class="container mt-2 mb-2" style="padding-left: 0px">
        <ul class="st-nav-menu nav navbar-nav">
          <li class="st-nav-section st-nav-primary nav-item">
            <div class="text-center">
              <figure class="mockup mr-1">
                <img
                  style="height: 60px"
                  src="../../assets/logo4.svg"
                  alt="..."
                />
              </figure>
            </div>
            <div class="text-center ml-2">
              <figure class="mockup">
                <img
                  class="mt-1"
                  style="height: 48px"
                  src="http://f.atknin.tech/f/jrra_taxadviser.svg"
                  alt=""
                />
              </figure>
            </div>
          </li>

          <li
            class="st-nav-section st-nav-secondary nav-item"
          >
            <a class="b nav-link" href="tel:+74953804161">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.47548 2.00361L6.44703 2.00173C5.13019 1.94046 3.2719 3.52383 2.58526 4.66906C1.83186 5.69814 1.81737 7.06475 2.47529 8.6455L2.57901 8.8842C4.31265 13.1537 10.818 19.6509 15.0709 21.4297C16.6981 22.191 18.1483 22.2049 19.291 21.3821C20.2956 20.8078 21.9431 18.8968 21.8955 17.5396C21.8503 16.9812 21.5907 16.5254 21.1875 16.1104L21.0891 16.0127L20.8152 15.7594C19.8234 14.8725 18.1062 13.6098 17.5751 13.4982C16.9515 13.3682 16.5286 13.4846 15.8616 13.8523L15.6132 13.9936C15.1389 14.2671 14.9693 14.3139 14.7446 14.2319C12.3717 13.2578 10.6985 11.5761 9.71791 9.16394C9.65417 8.98522 9.68569 8.82913 9.89193 8.4507L10.0006 8.25773C10.4502 7.47256 10.6009 7.02869 10.4593 6.34521L10.4343 6.25664C10.202 5.58042 8.77842 3.67254 7.98799 2.84195L7.86065 2.71312C7.44871 2.30856 6.99574 2.0484 6.47548 2.00361ZM6.36497 3.46397L6.4192 3.47438C6.5141 3.50117 6.62602 3.56689 6.75204 3.67518L6.84383 3.75911L7.01708 3.9415C7.68914 4.68353 8.99113 6.43341 9.03419 6.64265C9.07489 6.83908 9.02988 7.00325 8.81663 7.39014L8.70506 7.58738C8.23546 8.40967 8.0901 8.93988 8.35996 9.68968C9.4991 12.4936 11.4597 14.464 14.2214 15.5971C14.9336 15.8575 15.4386 15.7534 16.1539 15.3657L16.399 15.2273C16.8844 14.9466 17.0621 14.8857 17.2784 14.9308C17.4898 14.9752 19.3814 16.3949 20.0749 17.0621L20.1559 17.1426C20.3347 17.3268 20.4325 17.4985 20.443 17.6259C20.4526 17.9236 20.1545 18.483 19.6281 19.0935C19.2534 19.5281 18.7668 19.9725 18.5559 20.1198L18.5055 20.1524C17.8239 20.6389 16.9821 20.6598 15.8691 20.1855L15.6572 20.0908C11.8121 18.4818 5.76508 12.488 4.01861 8.54808L3.91511 8.30456C3.37395 7.10758 3.32905 6.2325 3.71762 5.5958L3.79554 5.47919C4.24591 4.73347 5.60316 3.55891 6.27894 3.4685L6.36497 3.46397ZM14.4217 2.24373L14.5206 2.24805C18.4503 2.68669 21.5537 5.803 21.9954 9.75343C22.0403 10.155 21.7529 10.5171 21.3535 10.5622C20.9541 10.6074 20.5939 10.3184 20.549 9.91687C20.1833 6.64586 17.6138 4.06559 14.36 3.70241C13.9605 3.65782 13.6726 3.29611 13.717 2.8945C13.7539 2.55982 14.0099 2.30305 14.3254 2.25256L14.4217 2.24373ZM14.4813 5.70096L14.5795 5.7134C16.5878 6.10696 18.1572 7.6848 18.5487 9.70396C18.6256 10.1006 18.3681 10.4848 17.9736 10.5621C17.5791 10.6394 17.197 10.3805 17.1201 9.98391C16.8421 8.54969 15.7276 7.42921 14.301 7.14966C13.9065 7.07236 13.6491 6.68817 13.726 6.29155C13.7901 5.96104 14.0661 5.7262 14.3846 5.70184L14.4813 5.70096Z"
                  fill="#333"
                />
              </svg>
              +7 495 380-41-61
            </a>
            <a class="b nav-link" @click="page('login')">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3344 2.00024H7.66537C4.26779 2.00024 2.00037 4.43284 2.00037 7.91624V16.0842C2.00037 19.5709 4.26174 22.0002 7.66537 22.0002H16.3334C19.738 22.0002 22.0004 19.5709 22.0004 16.0842V7.91624C22.0004 4.42975 19.7381 2.00024 16.3344 2.00024ZM7.66537 3.50024H16.3344C18.8849 3.50024 20.5004 5.23521 20.5004 7.91624V16.0842C20.5004 18.7654 18.8847 20.5002 16.3334 20.5002H7.66537C5.11513 20.5002 3.50037 18.7656 3.50037 16.0842V7.91624C3.50037 5.23862 5.12071 3.50024 7.66537 3.50024ZM8.84027 9.39824C7.40412 9.39824 6.23927 10.564 6.23927 12.0002C6.23927 13.4365 7.40412 14.6022 8.84027 14.6022C10.0164 14.6022 11.0104 13.8214 11.3325 12.7502L13.4316 12.7501V13.8517L13.4384 13.9535C13.4881 14.3196 13.8019 14.6017 14.1816 14.6017C14.5958 14.6017 14.9316 14.266 14.9316 13.8517V12.7501L16.26 12.75L16.2603 13.8522L16.2671 13.954C16.3168 14.3201 16.6306 14.6022 17.0103 14.6022C17.4245 14.6022 17.7603 14.2665 17.7603 13.8522V12.0002L17.7534 11.8985C17.7038 11.5324 17.39 11.2502 17.0103 11.2502H14.2092C14.2 11.2499 14.1908 11.2497 14.1816 11.2497C14.1723 11.2497 14.1631 11.2499 14.1539 11.2502H11.3325C11.0104 10.1791 10.0164 9.39824 8.84027 9.39824ZM8.84027 10.8982C9.44864 10.8982 9.94227 11.392 9.94227 12.0002C9.94227 12.6084 9.44864 13.1022 8.84027 13.1022C8.2328 13.1022 7.73927 12.6083 7.73927 12.0002C7.73927 11.3921 8.2328 10.8982 8.84027 10.8982Z"
                  fill="#333"
                />
              </svg>

              Личный кабинет
            </a>
            <!-- <button type="button" class="btn btn-md  btn-primary btn-outlined" @click='page("login")'><i class="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2"></i>Личный  кабинет</button> -->
          </li>

          <!-- <li class="st-nav-section st-nav-secondary nav-item"><a class="btn mr-3 px-3" href="login.html" target="_blank"><i class="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2"></i> <span class="d-md-none d-lg-inline">Личный кабинет</span> </a> -->
          <!-- <a class="btn btn-rounded btn-solid px-3" href="signup.html" target="_blank"><i class="fas fa-user-plus d-none d-md-inline mr-md-0 mr-lg-2"></i> <span class="d-md-none d-lg-inline">Signup</span></a></li>Mobile Navigation -->
          <li class="st-nav-section st-nav-mobile nav-item">
            <button class="st-root-link navbar-toggler" type="button">
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="st-popup">
              <div class="st-popup-container">
                <a class="st-popup-close-button">Close</a>
                <div class="st-dropdown-content-group">
                  <h4 class="text-uppercase regular">Pages</h4>
                  <a class="regular text-primary" href="about.html"
                    ><i class="far fa-building mr-2"></i> About </a
                  ><a class="regular text-success" href="contact.html"
                    ><i class="far fa-envelope mr-2"></i> Contact </a
                  ><a class="regular text-warning" href="pricing.html"
                    ><i class="fas fa-hand-holding-usd mr-2"></i> Pricing </a
                  ><a class="regular text-primary" href="faqs.html"
                    ><i class="far fa-question-circle mr-2"></i> FAQs</a
                  >
                </div>
                <div class="st-dropdown-content-group border-top bw-2">
                  <h4 class="text-uppercase regular">Components</h4>
                  <div class="row">
                    <div class="col mr-4">
                      <a target="_blank" href="components/alert.html">Alerts</a>
                      <a target="_blank" href="components/badge.html">Badges</a>
                      <a target="_blank" href="components/button.html"
                        >Buttons</a
                      >
                      <a target="_blank" href="components/color.html">Colors</a>
                      <a target="_blank" href="components/accordion.html"
                        >Accordion</a
                      >
                      <a target="_blank" href="components/cookie-law.html"
                        >Cookielaw</a
                      >
                    </div>
                    <div class="col mr-4">
                      <a target="_blank" href="components/overlay.html"
                        >Overlay</a
                      >
                      <a target="_blank" href="components/progress.html"
                        >Progress</a
                      >
                      <a target="_blank" href="components/lightbox.html"
                        >Lightbox</a
                      >
                      <a target="_blank" href="components/tab.html">Tabs</a>
                      <a target="_blank" href="components/tables.html"
                        >Tables</a
                      >
                      <a target="_blank" href="components/typography.html"
                        >Typography</a
                      >
                    </div>
                  </div>
                </div>
                <div class="st-dropdown-content-group bg-light b-t">
                  <a href="login.html"
                    >Sign in <i class="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <li class="cherdack" style=" border-top:1px solid #eee; width: 100%;  ">
        <div
          class="container st-nav-section st-nav-primary nav-item pa-0"
          style="justify-content: left"
        >
          <a
            class="item-products st-has-dropdown nav-link"
            style=" border-top:3px solid #16336E; "
            data-dropdown="blocks"
            href="https://palata-nk.ru/nalogoplatelshchiku/"
            >Основной сайт
          </a>
          <span class="nav-link active" style="cursor:auto !important; border-top:3px solid ; color:#04A27C !important;"
            >Обучение и повышение квалификации
          </span>
          <a
            class="item-products st-has-dropdown nav-link"
            style="border-top:3px solid #ffa500; "
            data-dropdown="blocks"
            href="https://palata-nk.ru/nalogoplatelshchiku/"
            >Налогоплательщику
          </a>
         
          <a
            class="item-company st-has-dropdown nav-link"
            style=" border-top:3px solid #e41819; "
            target="_blank"
            href="/library/"
            >Налоговая библиотека
          </a>
        </div>
      </li>
      
      
      <!-- <div class="st-dropdown-root">
        <div class="st-dropdown-bg">
          <div class="st-alt-bg"></div>
        </div>
        <div class="st-dropdown-arrow"></div>
        <div class="st-dropdown-container">
          <div class="st-dropdown-section" data-dropdown="blocks">
            <div class="st-dropdown-content">
              <div class="st-dropdown-content-group">
                <div class="row">
                  <div class="col mr-4">
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/call-to-action.html"
                      >Call to actions</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/contact.html"
                      >Contact</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/counter.html"
                      >Counters</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/faqs.html"
                      >FAQs</a
                    >
                  </div>
                  <div class="col mr-4">
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/footer.html"
                      >Footers</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/form.html"
                      >Forms</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/navbar.html"
                      >Navbar</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/navigation.html"
                      >Navigation</a
                    >
                  </div>
                  <div class="col">
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/pricing.html"
                      >Pricing</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/slider.html"
                      >Sliders</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/team.html"
                      >Team</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blocks/testimonial.html"
                      >Testimonials</a
                    >
                  </div>
                </div>
              </div>
              <div class="st-dropdown-content-group">
                <h3 class="link-title">
                  <i class="fas fa-long-arrow-alt-right icon"></i> Coming soon
                </h3>
                <div class="ml-5">
                  <span class="dropdown-item text-secondary">Dividers </span
                  ><span class="dropdown-item text-secondary">Gallery </span
                  ><span class="dropdown-item text-secondary">Screenshots</span>
                </div>
              </div>
            </div>
          </div>
          <div class="st-dropdown-section" data-dropdown="pages">
            <div class="st-dropdown-content">
              <div class="st-dropdown-content-group">
                <div class="mb-4">
                  <h3 class="text-darker light text-nowrap">
                    <span class="bold regular">Useful pages</span> you'll need
                  </h3>
                  <p class="text-secondary mt-0">Get a complete design stack</p>
                </div>
                <div class="row">
                  <div class="col">
                    <ul class="mr-4">
                      <li>
                        <h4 class="text-uppercase regular">Error</h4>
                      </li>
                      <li><a target="_blank" href="403.html">403 Error</a></li>
                      <li><a target="_blank" href="404.html">404 Error</a></li>
                      <li><a target="_blank" href="405.html">405 Error</a></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="mr-4">
                      <li>
                        <h4 class="text-uppercase regular">User</h4>
                      </li>
                      <li><a target="_blank" href="login.html">Login</a></li>
                      <li>
                        <a target="_blank" href="register.html">Register</a>
                      </li>
                      <li><a target="_blank" href="forgot.html">Forgot</a></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li>
                        <h4 class="text-uppercase regular">Extra</h4>
                      </li>
                      <li>
                        <a target="_blank" href="pricing.html">Pricing</a>
                      </li>
                      <li><a target="_blank" href="terms.html">Terms</a></li>
                      <li><a target="_blank" href="faqs.html">FAQ</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="st-dropdown-content-group">
                <a class="dropdown-item bold" href="about.html"
                  ><i class="far fa-building icon"></i> About </a
                ><a class="dropdown-item bold" href="contact.html"
                  ><i class="far fa-envelope icon"></i> Contact </a
                ><a class="dropdown-item bold" href="pricing.html"
                  ><i class="fas fa-hand-holding-usd icon"></i> Pricing</a
                >
              </div>
            </div>
          </div>
          <div class="st-dropdown-section" data-dropdown="components">
            <div class="st-dropdown-content">
              <div class="st-dropdown-content-group">
                <a
                  class="dropdown-item"
                  target="_blank"
                  href="components/color.html"
                >
                  <div class="media mb-4">
                    <i
                      class="fas fa-palette mr-2 bg-primary rounded-circle icon-md text-contrast center-flex"
                    ></i>
                    <div class="media-body">
                      <h3 class="link-title m-0">Colors</h3>
                      <p class="m-0 text-secondary">
                        Get to know DashCore color options
                      </p>
                    </div>
                  </div> </a
                ><a
                  class="dropdown-item"
                  target="_blank"
                  href="components/accordion.html"
                >
                  <div class="media mb-4">
                    <i
                      class="fas fa-bars mr-2 bg-primary rounded-circle icon-md text-contrast center-flex"
                    ></i>
                    <div class="media-body">
                      <h3 class="link-title m-0">Accordion</h3>
                      <p class="m-0 text-secondary">
                        Useful accordion elements
                      </p>
                    </div>
                  </div> </a
                ><a
                  class="dropdown-item"
                  target="_blank"
                  href="components/cookie-law.html"
                >
                  <div class="media mb-4">
                    <i
                      class="fas fa-cookie-bite mr-2 bg-primary rounded-circle icon-md text-contrast center-flex"
                    ></i>
                    <div class="media-body">
                      <h3 class="link-title m-0">CookieLaw</h3>
                      <p class="m-0 text-secondary">
                        Comply with the hideous EU Cookie Law
                      </p>
                    </div>
                  </div>
                </a>
                <h4 class="text-uppercase regular">Huge components list</h4>
                <div class="row">
                  <div class="col mr-4">
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/alert.html"
                      >Alerts</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/badge.html"
                      >Badges</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/button.html"
                      >Buttons</a
                    >
                  </div>
                  <div class="col mr-4">
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/overlay.html"
                      >Overlay</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/progress.html"
                      >Progress</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/lightbox.html"
                      >Lightbox</a
                    >
                  </div>
                  <div class="col mr-4">
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/tab.html"
                      >Tabs</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/tables.html"
                      >Tables</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="components/typography.html"
                      >Typography</a
                    >
                  </div>
                </div>
              </div>
              <div class="st-dropdown-content-group">
                <a
                  class="dropdown-item"
                  target="_blank"
                  href="components/wizard.html"
                  >Wizard
                  <span class="badge badge-pill badge-primary">New</span></a
                >
                <span class="dropdown-item d-flex align-items-center text-muted"
                  >Timeline <i class="fas fa-ban ml-auto"></i
                ></span>
                <span class="dropdown-item d-flex align-items-center text-muted"
                  >Process <i class="fas fa-ban ml-auto"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="st-dropdown-section" data-dropdown="blog">
            <div class="st-dropdown-content">
              <div class="st-dropdown-content-group">
                <div class="row">
                  <div class="col mr-4">
                    <h4 class="regular text-uppercase">Full width</h4>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blog/blog-post.html"
                      >Single post</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blog/blog-grid.html"
                      >Posts Grid</a
                    >
                  </div>
                  <div class="col mr-4">
                    <h4 class="regular text-uppercase">Sidebar left</h4>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blog/blog-post-sidebar-left.html"
                      >Single post</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blog/blog-grid-sidebar-left.html"
                      >Posts Grid</a
                    >
                  </div>
                  <div class="col mr-4">
                    <h4 class="regular text-uppercase">Sidebar right</h4>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blog/blog-post-sidebar-right.html"
                      >Single post</a
                    >
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="blog/blog-grid-sidebar-right.html"
                      >Posts Grid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="st-dropdown-section" data-dropdown="shop">
            <div class="st-dropdown-content">
              <div class="st-dropdown-content-group">
                <a class="dropdown-item" target="_blank" href="shop/home.html">
                  <div class="media align-items-center">
                    <div
                      class="bg-success text-contrast icon-md center-flex rounded-circle mr-3"
                    >
                      <i class="fas fa-shopping-basket"></i>
                    </div>
                    <div class="media-body">
                      <h3 class="link-title m-0">Home</h3>
                     <p class="m-0 text-secondary">
                        Online store home with an outstanding UX
                      </p>
                    </div>
                  </div> </a
                ><a class="dropdown-item" target="_blank" href="shop/cart.html">
                  <div class="media align-items-center">
                    <div
                      class="bg-info text-contrast icon-md center-flex rounded-circle mr-3"
                    >
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="media-body">
                      <h3 class="link-title m-0">Cart</h3>
                      <p class="m-0 text-secondary">
                        Online store shopping cart
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="st-dropdown-content-group">
                <h3 class="link-title">
                  <i class="fas fa-money-check-alt icon"></i> Checkout
                </h3>
                <div class="ml-5">
                  <a
                    class="dropdown-item text-secondary"
                    target="_blank"
                    href="shop/checkout-customer.html"
                    >Customer <i class="fas fa-angle-right ml-2"></i> </a
                  ><a
                    class="dropdown-item text-secondary"
                    target="_blank"
                    href="shop/checkout-shipping.html"
                    >Shipping Information
                    <i class="fas fa-angle-right ml-2"></i> </a
                  ><a
                    class="dropdown-item text-secondary"
                    target="_blank"
                    href="shop/checkout-payment.html"
                    >Payment Methods <i class="fas fa-angle-right ml-2"></i> </a
                  ><a
                    class="dropdown-item text-secondary"
                    target="_blank"
                    href="shop/checkout-confirmation.html"
                    >Order Review <i class="fas fa-angle-right ml-2"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </nav>
    <main class="" >
        
      <!-- Payment Services Heading -->
      <header class="  payment-services-header bg-image-0" id="home"  style="background-color:#04A27C">
        

        <div class="container pt-5" >
          <div class=" row align-items-center">
            <div class="col-md-12 text-center text-md-left">
              <!-- <span class="py-2">Образование через всю жизнь</span> -->
              <h2 class="bold font-md display-lg-4 b-white">
                Профессия
                <span class="d-block">Налогового Консультанта / </span>
                <span class="d-block">Консультанта по налогам и сборам</span>
              </h2>
              <!-- <p class="lead bold b-white">
                
              </p> -->

              <!-- <div class="mt-2" data-aos="fade-right" data-aos-offset="0">
                <v-row class="pl-3 mt-2">
                    <v-card
                      v-for='event in events'
                      class="mr-2 opacity-bg"
                      max-width="300"
                      outlined
                    >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class=" mb-1">
                            <v-chip small label>{{event.sub}}</v-chip>
                          </v-list-item-title>
                          <div class="mb-1 text-overline">
                            {{event.name}}
                          </div>
                          
                          <v-list-item-subtitle>{{event.date}}</v-list-item-subtitle>
                        </v-list-item-content>
                        
                      </v-list-item>
                      
                      <v-card-actions >
                        <v-btn
                          label
                          text
                          target='_blank'
                          :href='event.link'
                        >
                          Записаться
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                    

                    <v-card
                      class="mr-2 transparent"
                      outlined
                      dark
                    >
                      <span>
                      Каталог мероприятий
                      <a
                          style='color:white; text-decoration:underline; font-weight:700;'
                          target='_blank'
                          href='https://palata-nk.ru/events/'
                        >
                          выбрать из списка 
                        </a>
                      </span>
                      
                    </v-card>

                </v-row>
              </div> -->
            </div>
            <!--  <div class="col-md-6">
              <div class="shapes-container">
                <div class="static-shape>"></div>
              </div>
             <figure class="figure-box mockup cutout x2 bottom-right">
                <div class="screens">
                  <img src="img/payment-services/bg.png" alt="..." />
                  <img
                    src="/testimodals/kruchkov.jpg"
                    class="position-absolute"
                    alt="..."
                  />
                </div>
                <div
                  class="promo-box card shadow-lg border-0"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                >
                  <div class="card-body p-5 text-center">
                    <figure class="icon-xxl mx-auto">
                      <img src="logo2.svg" alt="..." />
                    </figure>
                    <h6 class="h6 mb-0">
                      Находка для меня – <br />наличие блока по <br />
                      финансовому анализу
                    </h6>
                    <hr class="my-3 mx-auto w-25" />
                    <p class="mt-4 small text-muted mb-0">
                      Егор Крючков, <br />заместитель директора <br />
                      юридического департамента <br />
                      по налоговым вопросам <br />
                      АКГ «Созидание и Развитие»
                    </p>
                  </div>
                </div>
              </figure> 
            </div> -->
          </div>
        </div>

        <div
          class="d-flex justify-center"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          style=";"
        >
        <div
            class=" b dropdown"
            href="#"
           
            >
              <v-list-item three-line class="dropbtn"  style='min-height:300px;'>
                <v-list-item-avatar
                  tile
                  size="80"
                > <v-img contain src='future2.svg'></v-img></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="b mb-2"  v-scroll-to="'#future-nalog'">
                    <b>Будущему <br>налоговому консультанту</b> <br><br>
                    <small>Лучшее знакомство с нами – <br>через участие в наших <br>мероприятиях.  <br>
                    Выбери любое из текущих <br> мероприятий, зарегистрируйся <br> на безвозмездной основе </small>
                  </v-list-item-title>
                   <v-list-item-subtitle>
                     <a class='b' @click="page('login')">
                        <svg class='icon-mb' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.0019 7.4795V5.77979C13.0019 3.79033 11.3885 2.17692 9.39904 2.17692C7.40959 2.16821 5.78984 3.77371 5.78113 5.76396V5.77979V7.4795" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4159 16.8226H6.36675C4.709 16.8226 3.36475 15.4792 3.36475 13.8206V10.4252C3.36475 8.76661 4.709 7.42316 6.36675 7.42316H12.4159C14.0736 7.42316 15.4179 8.76661 15.4179 10.4252V13.8206C15.4179 15.4792 14.0736 16.8226 12.4159 16.8226Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9.39144 11.2438V13.0021" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Личный кабинет
                      </a>
                  </v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
            <!-- <button >Будущему налоговому консультанту</button> -->
            <div class="dropdown-content">
              <a @click="page('/request/')" >
                <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7871 12.1676H6.37207" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.7871 9.02771H6.37207" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.43856 5.89508H6.37231" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9315 2.06238C11.9315 2.06238 6.17374 2.06538 6.16474 2.06538C4.09474 2.07813 2.81299 3.44013 2.81299 5.51763V12.4146C2.81299 14.5026 4.10449 15.8699 6.19249 15.8699C6.19249 15.8699 11.9495 15.8676 11.9592 15.8676C14.0292 15.8549 15.3117 14.4921 15.3117 12.4146V5.51763C15.3117 3.42963 14.0195 2.06238 11.9315 2.06238Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Подать заявление на обучение
                </a>
              <a href="/library/">
                <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99988 2.06268C12.8316 2.06268 15.9374 5.16918 15.9374 9.00018C15.9374 12.8312 12.8316 15.9377 8.99988 15.9377C5.16888 15.9377 2.06238 12.8312 2.06238 9.00018C2.06238 5.16918 5.16888 2.06268 8.99988 2.06268Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99622 6.15326V9.46751" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99625 11.8471H9.00375" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Вопросы и ответы о профессии
              </a>
            </div>
          </div>
     
        <div
            class="b dropdown"
            >
           
              <v-list-item three-line class="dropbtn"  style='min-height:300px;'>
                 <v-list-item-avatar
                  tile
                  
                  size="80"
                  
                >  <v-img contain src='attest2.svg'></v-img></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="b mb-4">
                    <b>Аттестованному <br>налоговому консультанту</b>
                    <br>
                    <br>
                    <small>«Окно» дополнительных <br>карьерных возможностей<br> и расширение <br>профессиональных компетенций </small>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                     <a class='b' @click="page('login')">
                        <svg class='icon-mb' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.0019 7.4795V5.77979C13.0019 3.79033 11.3885 2.17692 9.39904 2.17692C7.40959 2.16821 5.78984 3.77371 5.78113 5.76396V5.77979V7.4795" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4159 16.8226H6.36675C4.709 16.8226 3.36475 15.4792 3.36475 13.8206V10.4252C3.36475 8.76661 4.709 7.42316 6.36675 7.42316H12.4159C14.0736 7.42316 15.4179 8.76661 15.4179 10.4252V13.8206C15.4179 15.4792 14.0736 16.8226 12.4159 16.8226Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9.39144 11.2438V13.0021" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Личный кабинет
                      </a>
                  </v-list-item-subtitle>
                </v-list-item-content>

               
              </v-list-item>

            <div class="dropdown-content">
              <a href="#"  v-scroll-to="'#future-nalog'">
                  <svg width="18"class='icon-mb'   height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2141 1.5H14.6641C15.6777 1.5 16.5 2.32942 16.5 3.35264V5.82308C16.5 6.84552 15.6777 7.67571 14.6641 7.67571H12.2141C11.1997 7.67571 10.3774 6.84552 10.3774 5.82308V3.35264C10.3774 2.32942 11.1997 1.5 12.2141 1.5Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33669 1.5H5.78587C6.80027 1.5 7.62256 2.32942 7.62256 3.35264V5.82308C7.62256 6.84552 6.80027 7.67571 5.78587 7.67571H3.33669C2.32228 7.67571 1.5 6.84552 1.5 5.82308V3.35264C1.5 2.32942 2.32228 1.5 3.33669 1.5Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33669 10.3243H5.78587C6.80027 10.3243 7.62256 11.1537 7.62256 12.1777V14.6474C7.62256 15.6706 6.80027 16.5 5.78587 16.5H3.33669C2.32228 16.5 1.5 15.6706 1.5 14.6474V12.1777C1.5 11.1537 2.32228 10.3243 3.33669 10.3243Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2141 10.3243H14.6641C15.6777 10.3243 16.5 11.1537 16.5 12.1777V14.6474C16.5 15.6706 15.6777 16.5 14.6641 16.5H12.2141C11.1997 16.5 10.3774 15.6706 10.3774 14.6474V12.1777C10.3774 11.1537 11.1997 10.3243 12.2141 10.3243Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  Программая лояльности
                </a>
              <a href="">
                <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.43359 11.0861L7.67844 8.16853L10.2391 10.18L12.4359 7.34473" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <ellipse cx="14.9966" cy="3.1502" rx="1.44165" ry="1.44165" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1933 2.34015H5.74253C3.48395 2.34015 2.0835 3.93969 2.0835 6.19827V12.2601C2.0835 14.5186 3.45649 16.1113 5.74253 16.1113H12.1956C14.4542 16.1113 15.8547 14.5186 15.8547 12.2601V6.98088" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Повышение квалификации
              </a>
              <a href="#">
                <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.31958 7.05322H15.6875" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3315 9.9823H12.3384" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.00335 9.9823H9.0103" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.66839 9.9823H5.67534" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3315 12.8972H12.3384" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.00335 12.8972H9.0103" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.66839 12.8972H5.67534" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.0327 1.5V3.96809" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.97411 1.5V3.96809" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1787 2.68439H5.82822C3.6257 2.68439 2.25 3.91134 2.25 6.16666V12.9539C2.25 15.2447 3.6257 16.5 5.82822 16.5H12.1718C14.3812 16.5 15.75 15.2659 15.75 13.0106V6.16666C15.7569 3.91134 14.3882 2.68439 12.1787 2.68439Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Мероприятия
              </a>
              <a href="/library/">
                <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99988 2.06268C12.8316 2.06268 15.9374 5.16918 15.9374 9.00018C15.9374 12.8312 12.8316 15.9377 8.99988 15.9377C5.16888 15.9377 2.06238 12.8312 2.06238 9.00018C2.06238 5.16918 5.16888 2.06268 8.99988 2.06268Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99622 6.15326V9.46751" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99625 11.8471H9.00375" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Вопросы и ответы
                </a>
            </div>
          </div>

        <div
            class=" b dropdown"
            href="#"
            >
              <v-list-item three-line class="dropbtn"  style='min-height:300px;'>
                <v-list-item-avatar
                  tile
                  size="80"
                ><v-img contain src='people.svg' ></v-img></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="b">
                    <b>Образовательным организациям <br> и преподавателям</b>
                    <br>
                    <br>
                    <small>
                      Безграмотными в XXI веке <br>будут не те, <br>кто не умеет писать и читать , <br>а те, кто не умеет учиться,<br> разучиваться и переучиваться
                      <br>
                      <i>Элвин Тоффлер</i>
                    </small>

                  </v-list-item-title>
                  <v-list-item-subtitle>
                     <a class='b' @click="page('login')">
                        <svg class='icon-mb' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.0019 7.4795V5.77979C13.0019 3.79033 11.3885 2.17692 9.39904 2.17692C7.40959 2.16821 5.78984 3.77371 5.78113 5.76396V5.77979V7.4795" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4159 16.8226H6.36675C4.709 16.8226 3.36475 15.4792 3.36475 13.8206V10.4252C3.36475 8.76661 4.709 7.42316 6.36675 7.42316H12.4159C14.0736 7.42316 15.4179 8.76661 15.4179 10.4252V13.8206C15.4179 15.4792 14.0736 16.8226 12.4159 16.8226Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9.39144 11.2438V13.0021" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Личный кабинет
                      </a>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            <div class="dropdown-content">
              <a @click="page('/request-org/')" v-scroll-to="'#org-nalog'">
                <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2749 14.9236H15.0577" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64128 3.71677C10.194 3.01252 11.0873 3.04927 11.7923 3.60202L12.8348 4.41952C13.5398 4.97227 13.7895 5.82952 13.2368 6.53527L7.02003 14.4665C6.81228 14.732 6.49503 14.8888 6.15753 14.8925L3.75978 14.9233L3.21678 12.587C3.14028 12.2593 3.21678 11.9143 3.42453 11.648L9.64128 3.71677Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.47705 5.20209L12.0726 8.02059" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                Заполнить заявку на аккредитацию
                </a>
              <a href="#">
               <svg width="18" class='icon-mb'  height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99988 2.06268C12.8316 2.06268 15.9374 5.16918 15.9374 9.00018C15.9374 12.8312 12.8316 15.9377 8.99988 15.9377C5.16888 15.9377 2.06238 12.8312 2.06238 9.00018C2.06238 5.16918 5.16888 2.06268 8.99988 2.06268Z" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99622 6.15326V9.46751" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99625 11.8471H9.00375" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                Вопросы и ответы
                </a>
            </div>
          </div>
      </div>
      </header>
      <!-- Credit Cards Management -->

      
      <v-row class='mt-4 container' style='display:none'>
                  <v-col cols='4'> 
                    <div  style="cursor:pointer;">
                    <v-row class="ml-4 mr-4">
                        <h4  >Банер 
                          </h4>
                        </v-row>
                    </div>
                  </v-col>
                  <v-col cols='4'> 
                    <div  style="cursor:pointer;">
                    <v-row class="ml-4 mr-4">
                        <h4  >Банер 
                          </h4>
                            
                            
                            
                        </v-row>
                    </div>
                  </v-col>
                  <v-col cols='4'> 
                    <div  style="cursor:pointer;">
                    <v-row class="ml-4 mr-4">
                        <h4  >Банер 
                          </h4>
                            
                            
                            
                        </v-row>
                    </div>
                  </v-col>
                </v-row>

      <section
        class="section with-promo"
        id="org-nalog"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="100"
        style="margin-top:200px !important; "
      >
        <div class="container" style="padding-bottom:0px; !important;">
          <div class="row gap-y align-items-center">
            <div class="col-md-12">
              <div class="section-heading mb-0">
                <h2 class=" bold">
                 Путь присоединения к сообществу
                </h2>
                <p class="lead">Вступите в члены профессионального сообщества</p>
              </div>
                <v-row>
                  <v-col cols='6'> 
                    <div :class="tragectory1.class"  @click="change_tragectory(true)" style="cursor:pointer;">
                      <v-row class="ml-4 mr-4">
                          <div class="blob_1 mt-4"></div>
                        <h4  
                          > Обучение + сдача экзамена = членство
                          <!-- <i class="fas fa-arrow-up ml-2" v-if='block_expand.ec_profile' ></i> 
                          <i class="fas fa-arrow-down ml-2" v-else ></i>  -->
                          </h4>
                            Профессиональная переподготовка по программам «Налоговое консультирование» Союза «ПНК» осуществляется совместно с аккредитованными образовательными организациями в различных регионах России.
                            
                            <div v-if='block_expand.ec_profile' class="mt-2">
                            Преимущества обучения по нашим программам: <br>
                                - Соответствует требованиям законодательства о налогах и сборах и сопряженными отраслями права (ГК РФ, ТК РФ, банкротное законодательство и т.п.), а также требованиям проф. стандарта «Консультант по налогам и сборам»  <br>
                                - Унифицирована, то есть налоговый консультант, прошедший подготовку в Южно-Сахалинске, получил те же знания, умения , навыки и компетенции, что и налоговый консультант, обучившийся в Москве и других регионах <br>
                                - Актуализируется практикующими налоговыми консультантами в соответствии с методами работы налоговых органов и судебной практикой <br>
                                - Разработка программы не под возможности конкретного вуза с учетом преподавательского состава, а под потребности постоянно изменяющейся практики в сфере налогового консультирования <br>
                                - Программа учитывает риски практической деятельности налоговых консультантов и вопросов связанной с этим ответственности. 
                                <br> <br>
                                Палата налоговых консультантов как разработчик программы под целевые задачи проф. сообщества контролирует качество доведения до потребителя содержание программы (интеллектуального ресурса): <br>
                                -	Разработка и обеспечение каждого претендента учебно-методическими пособиями <br>
                                -	Разработка оценочных средств (экзаменационных заданий) с обязательным предэкзаменационным консультированием по каждому заданию <br>
                                -	Актуалализация знаний непосредственно в процессе обкчения по интересующим слушателей темам на безвозмездной основе через мероприятия Палаты
                            </div>
                        </v-row>
                        
                    </div>
                  </v-col>
                  <v-col cols='6'> 
                    <div :class="tragectory2.class"  @click="change_tragectory(false)" style="cursor:pointer;">
                    <v-row class="ml-4 mr-4">
                          <div class="blob_2 mt-4"></div>
                        <h4  > Индивидуальная профессиональная траектория = членство в Союзе «ПНК»
                          <!-- <i class="fas fa-arrow-up ml-2" v-if='block_expand.ec_profile' ></i> 
                          <i class="fas fa-arrow-down ml-2" v-else ></i>  -->
                          </h4>
                            Если вы практикуете в области налогообложения (бухгалтер, аудитор, финансовый директор и т.п.) или налогового консультирования (консультант, адвокат, юрист и т.п.) присоединитесь к проф.сообществу Союз «ПНК» через индивидуальную профессиональную траекторию!
                            
                            <div v-if='block_expand.ec_profile' class="mt-2">
                            Преимущества обучения по нашим программам: <br>
                                - Соответствует требованиям законодательства о налогах и сборах и сопряженными отраслями права (ГК РФ, ТК РФ, банкротное законодательство и т.п.), а также требованиям проф. стандарта «Консультант по налогам и сборам»  <br>
                                - Унифицирована, то есть налоговый консультант, прошедший подготовку в Южно-Сахалинске, получил те же знания, умения , навыки и компетенции, что и налоговый консультант, обучившийся в Москве и других регионах <br>
                                - Актуализируется практикующими налоговыми консультантами в соответствии с методами работы налоговых органов и судебной практикой <br>
                                - Разработка программы не под возможности конкретного вуза с учетом преподавательского состава, а под потребности постоянно изменяющейся практики в сфере налогового консультирования <br>
                                - Программа учитывает риски практической деятельности налоговых консультантов и вопросов связанной с этим ответственности. 
                                <br> <br>
                                Палата налоговых консультантов как разработчик программы под целевые задачи проф. сообщества контролирует качество доведения до потребителя содержание программы (интеллектуального ресурса): <br>
                                -	Разработка и обеспечение каждого претендента учебно-методическими пособиями <br>
                                -	Разработка оценочных средств (экзаменационных заданий) с обязательным предэкзаменационным консультированием по каждому заданию <br>
                                -	Актуалализация знаний непосредственно в процессе обкчения по интересующим слушателей темам на безвозмездной основе через мероприятия Палаты
                            </div>
                            
                        </v-row>
                    </div>
                  </v-col>
                </v-row>
                  
                <div class="rounded-lg bg-image-2 shadow mt-5" style="display:none">
                  <v-row class="ml-4 mr-4">
                      <sub>Базовое образование</sub>
                      <h3 @click="expand('ur_profile')"  style="cursor:pointer; "> Юридическое 
                         <i class="fas fa-arrow-up ml-2" v-if='block_expand.ur_profile' ></i> 
                        <i class="fas fa-arrow-down ml-2" v-else ></i> 
                        </h3>
                      Программа «Налоговое консультирование» реализуется в
                      партнерстве с образовательными организациями в сфере ДПО в 20
                      регионах России. Кроме того, ряд образовательных партнеров активно
                      применяют дистанционные технологии при реализации программы,
                      что делает подготовку возможной в любом уголке страны.
                      <div v-if='block_expand.ur_profile' class="mt-2"> Описание описание</div>
                      <div v-if='block_expand.ur_profile' class="mt-2"> Описание описание</div>
                      <div v-if='block_expand.ur_profile' class="mt-2"> Описание описание</div>
                  </v-row>
                </div>

                <div class="rounded-lg  bg-contrast shadow mt-5" style="display:none">
                  <v-row class="ml-4 mr-4">
                    <v-col cols='6' >
                      <h3 @click="expand('diff_profile')" style="cursor:pointer"> Другое 
                        <i class="fas fa-arrow-up ml-2" v-if='block_expand.diff_profile' ></i> 
                        <i class="fas fa-arrow-down ml-2" v-else ></i> 
                        
                        </h3>
                      <!-- <sup>У вас нет профильного образования</sup> -->
                    </v-col>
                    <v-col cols='6'>
                      Подготовка налоговых консультантов по программам Палаты налоговых консультантов аккредитованными образовательными организациями
                      <div v-if='block_expand.diff_profile' class="mt-2"> 
                        Преимущества обучения по нашим программам:
                          - Соответствует требованиям законодательства о налогах и сборах и сопряженными отраслями права (ГК РФ, ТК РФ, банкротное законодательство и т.п.), а также требованиям проф. стандарта «Консультант по налогам и сборам» (в процессе утверждения, подробнее>>>)
                          - Унифицирована, то есть налоговый консультант, прошедший подготовку в Южно-Сахалинске, получил те же знания, умения , навыки и компетенции, что и налоговый консультант, обучившийся в Москве и других регионах
                          - Актуализируется практикующими налоговыми консультантами в соответствии с методами работы налоговых органов и судебной практикой
                          - Разработка программы не под возможности конкретного вуза с учетом преподавательского состава, а под потребности постоянно изменяющейся практики в сфере налогового консультирования
                          - Программа учитывает риски практической деятельности налоговых консультантов и вопросов связанной с этим ответственности. 

                          Палата налоговых консультантов как разработчик программы под целевые задачи проф. сообщества контролирует качество доведения до потребителя содержание программы (интеллектуального ресурса):
                          -	Разработка и обеспечение каждого претендента учебно-методическими пособиями
                          -	Разработка оценочных средств (экзаменационных заданий) с обязательным предэкзаменационным консультированием по каждому заданию
                          -	Актуалализация знаний непосредственно в процессе обкчения по интересующим слушателей темам на безвозмездной основе через мероприятия Палаты

                      </div>
                    </v-col>
                  </v-row>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if='started'
        class=" bg-image-4 "
        id="org-nalog"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="100"
        style="-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;"
      >
    
            <ul class="timeline" v-if='tragectory_individual'>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <!-- <p class="timeline-event-thumbnail">Выбрать образовательную организацию</p> -->
                  <h3>Шаг 1. Выбрать образовательную организацию</h3>
                  <p>
                    Для приобретения статуса «Консультант по налогам и сборам» необходимо пройти профессиональную переподготовку по программе "Налоговое консультирование" в одной из аккредитованных образовательных организаций 
                  </p>
                  <v-btn href='/request/' outlined> Подать заявление</v-btn>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">Сдать экзамен</p>
                  <h3>Шаг 2. Обучение и экзамен</h3>
                  <!-- <h4>Designer und Autor</h4> -->
                  <p> 
                  Длительность курса профессиональной переподготовки составляет от трех до пяти месяцев в зависимости от расписания конкретной аккредитованной образовательной организации. 

                  </p>
                  <p> 
                  Дополнительно: <br>
                  Палата налоговых консультантов предоставляет возможность принять участие в 2-х мероприятиях на безвозмездной основе по интересующей тематике.
                  <br>
                  По результатам обучения сдается экзамен, успешная сдача которого подтверждается Дипломом о проф. переподготовке и квалификационным аттестатом Союза «ПНК». 
                  <br><br>
                  Дополнительная возможность:<br>
                  В случае необходимости пройти предэкзаменационное консультирование в Палате налоговых консультантов
  
                  </p>
                  <v-btn href='#' outlined> Образцы экзаменационных заданий</v-btn>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">Реестр</p>
                  <h3>Шаг 3. Публикация в Едином реестре аттестованных налоговых консультантов и подтверждение членства</h3>
                  <!-- <h4>IT-Consultant</h4> -->
                  <p>
                    QR-код вашего квалификационного аттестата содержит запись о вас в Едином реестре аттестованных налоговых консультантов (публично размещен на сайте Палаты, СПС «Консультант Плюс» и «Гарант»). Нахождение в Реестре является маркером на рынке консалтинговых услуг и у работодателей реального сектора экономики.  Членство в Палате подтверждается Удостоверением «Консультант по налогам и сборам». Срок действия удостоверения совпадает со сроком действия квалификационного аттестата. Актуальность документов подтверждается соответствующей записью в Едином реестре аттестованных налоговых консультантов.

                  </p>
                  <v-btn outlined href='https://palata-nk.ru/membership/chlenstvo-fizicheskikh-lits/poryadok-oplaty-chlenskikh-vznosov/'> Оплатить </v-btn>
                </div>
              </li>
            </ul>  



            <ul class="timeline" v-else>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">Знакомство</p>
                  <h3>Шаг 1. Напишите о себе</h3>
                  <p>
                    Будем рады знакомству с вами. Расскажите нам о себе, своем профессиональном опыте. 
                  </p>
                 
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">Траектория</p>
                  <h3>Шаг 2. Определите индивидуальную траекторию сотрудничества с Союзом «ПНК» - запишитесь на собеседование</h3>
                  <!-- <h4>Designer und Autor</h4> -->
                  <p> Вам будет предложена индивидуальная программа присоединения к профессиональному сообществу с учетом вашего образования, опыта, карьерных устремлений и требований проф. сообщества.  </p>
                   <p> 
                    – выбрать дату <br>
                    - Выбрать время <br>
                    - формат: личная встреча в офисе Палаты налоговых консультантов, г.Москва, ул. Земляной вал, д.4, стр.1
                    ZOOM<br>
                  </p>
                </div>
              </li>
         
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">Публикация в реестре</p>
                  <h3>Шаг 3. Публикация в Едином реестре аттестованных налоговых консультантов и подтверждение членства</h3>
                  <!-- <h4>IT-Consultant</h4> -->
                  <p>Членство в Союзе Палате подтверждается Удостоверением «Консультант по налогам и сборам» после прохождения индивидуальной программы. </p>
                  <v-btn outlined href='/'> Начать индивидуальную траекторию</v-btn>
                </div>
              </li>
            </ul> 

      </section>


      


      


      <section
        class="section with-promo "
        id="org-nalog"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="100"
      >
        <div class="container ">
          <div class="row gap-y align-items-center">
            <div class="col-md-12">
              <div class="section-heading">
                <h2 class=" bold">
                  <!-- Официальные спикеры и лекторы -->
                </h2>
                <!-- <p class="lead">The More you Pay the More you Earn</p> -->
              </div>
               
              <v-row class="bg-image-5 rounded align-items-center " style="height:350px; ">
                <v-row class="justify-center ">
                  <v-col cols='1'></v-col>
                  <v-col cols='8' >
                     <h3 class="bold mx-auto" style="color:white;" >
                        Повышение квалификации налоговых консультантов
                      </h3>
                      Текст для повышения кваллификация
                      <br>
                      <br>
                      <v-btn color='white' href='/request/'  class='mt-2' x-large>Подать заявку на повышение </v-btn>
                  </v-col>


                  <v-col  style="height:100%"></v-col>
                  
                  
                </v-row >
                
              </v-row>
            </div>
          </div>
        </div>
      </section>




      <section
        style="display:none"
        class="section with-promo mt-10"
        id="org-nalog"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="100"
      >
        <div class="container">
          <div class="row gap-y align-items-center">
            <div class="col-md-6">
              <div class="section-heading">
                <h2 class="heading-line bold">
                  <span class="light text-dark"
                    >Аттестованному налоговому консультанту</span
                  >
                </h2>
              </div>
              <div class="row gap-y">
                <div class="col-md-6">
                  <div class="rounded media bg-contrast shadow-lg p-4">
                    <div class="media-body">
                      <h5 class="bold text-capitalize">Личный кабинет</h5>
                      <p class=" mb-0">
                        Кабинет налогового консультанта для управлления
                        процессом обучения и членством в ПНК
                      </p>
                      <a href="javascript:;" class="btn btn-primary mt-4">
                        <span class="d-none d-sm-inline-block"
                          >войти в один клик</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="rounded media bg-contrast shadow-lg p-4">
                    <div class="media-body">
                      <h5 class="bold text-capitalize">Программа лояльности</h5>
                      <p class=" mb-0">
                        Заботимся о здоровье и отдыхе. Решаем бытовые вопросы.
                      </p>
                      <a href="javascript:;" class="btn btn-primary mt-4">
                        <span class="d-none d-sm-inline-block"
                          >узнать подробнее</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="rounded media bg-contrast shadow-lg p-4">
                    <div class="media-body">
                      <h5 class="bold text-capitalize">
                        Повышение квалификации
                      </h5>
                      <p class=" mb-0">
                        Актуализация знаний по вопросам налогового права и
                        налогообложения
                      </p>

                      <a href="javascript:;" class="btn btn-primary mt-4">
                        <span class="d-none d-sm-inline-block"
                          >подать заявку</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="rounded media bg-contrast shadow-lg p-4">
                    <div class="media-body">
                      <h5 class="bold text-capitalize">Мероприятия</h5>
                      <p class=" mb-0">
                        Перейти к списку мероприятий Палаты Налоговых
                        Консультантов
                      </p>
                      <a href="javascript:;" class="btn btn-primary mt-4">
                        <span class="d-none d-sm-inline-block"
                          >список мероприятий</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <figure class="figure-box mockup cutout bottom-right mr-md-0">
                <div class="screens"><img  src="p3.svg" alt="" /></div>
                <div class="promo-box card shadow bottom-left">
                  <div
                    class="circle-icon bg-primary p-2 rounded-circle center-flex shadow"
                  >
                    <i data-feather="gift" class="stroke-contrast"></i>
                  </div>
                  <v-expansion-panels accardion>
                    <v-expansion-panel
                      v-for="(item, i) in quest_attested"
                      :key="i"
                    >
                      <v-expansion-panel-header>{{
                        item.title
                      }}</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <span class="text-muted" small v-html="item.text">
                        </span
                      ></v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
                <div class="shapes-container">
                  <div class="shape pattern pattern-dots"></div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
      

      <section
        class="section with-promo anime-background"
        id="future-nalog"
        ata-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="300"
        style="display:none"
      >
        <div class="shapes-container">
          <div class="static-shape shape-main right"></div>
        </div>
        <div class="container">
          <div class="row gap-y align-items-center">
            <div class="col-md-8 order-md-last">
              <div class="section-heading">
                <h2 class="heading-line bold">
                  <span class="light text-dark"
                    >Будущему налоговому консультанту
                  </span>
                </h2>
              </div>
              <div class="row gap-y text-center text-md-left">
                <div class="col-md-6">
                  <p class="my-0 bold lead text-dark">
                    Образование через всю жизнь
                  </p>
                  <p>
                    Вы получаете остро заточенный инструмент для решения своих
                    задач и удовлетворения своих профессиональных потребностей
                  </p>
                </div>

                <div class="col-md-6">
                  <i
                    data-feather="sliders"
                    width="36"
                    height="36"
                    class="stroke-primary mb-3"
                  ></i>
                  <p class="my-0 bold lead text-dark">
                    Профессиональное сообщество
                  </p>
                  <p>
                    Обладатель аттестата всегда может получить поддержку своей
                    деятельности от профессионального сообщества
                  </p>
                </div>
                <div class="col-md-6">
                  <i
                    data-feather="dollar-sign"
                    width="36"
                    height="36"
                    class="stroke-primary mb-3"
                  ></i>
                  <p class="my-0 bold lead text-dark">
                    Сильные стороны программы
                  </p>
                  <p>
                    • Лучшие эксперты рынка ведут занятия <br />
                    • Качественные и актуальные методические материалы за 20 дет
                    опыта работы <br />
                    • Возможность сочетать дистанционное и очное обучение <br />
                  </p>
                </div>
                <div class="col-md-6">
                  <i
                    data-feather="download"
                    width="36"
                    height="36"
                    class="stroke-primary mb-3"
                  ></i>
                  <p class="my-0 bold lead text-dark">
                    Признание работодателями
                  </p>
                  <p>
                    Работодатели РФ признают квалификационный аттестат Палаты
                    как гарантию высокого профессионального уровня. Во многих
                    случаях, наличие аттестата включается работодателями в
                    требования к соискателям.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6">
                  <i
                    data-feather="download"
                    width="36"
                    height="36"
                    class="stroke-primary mb-3"
                  ></i>
                  <a class="btn btn-lg btn-primary btn-lg" href="/request/"
                    >Подать заявление сейчас</a
                  >
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <figure class="figure-box mockup cutout bottom-left ml-md-0">
                <div class="screens">
                  <img src="p1.svg" alt="" />
                </div>
                <div
                  class="promo-box card shadow top-right"
                  style="transform: translate(20%, 44%)"
                >
                  <div
                    class="circle-icon bg-primary p-2 rounded-circle center-flex shadow"
                  >
                    <i data-feather="shield" class="stroke-contrast"></i>
                  </div>
                  <v-expansion-panels accardion>
                    <v-expansion-panel v-for="(item, i) in quest_cons" :key="i">
                      <v-expansion-panel-header>{{
                        item.title
                      }}</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        {{ item.text }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
                <div class="shapes-container">
                  <div class="shape pattern pattern-dots"></div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      

      <section class="section anime-background"  style="display:none">
     
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-8 section-heading">
              <p class="bold mb-0 text-primary"></p>
              <h2 class="mt-0">
                Профессия <br />
                Налогового Консультанта
              </h2>
              <p class="text-muted">
                - Статус налогового консультанта подтверждается квалификационным
                аттестатом и удостоверением «Консультант по налогам и сборам»
                <br />
                - Профессиональная поддержка <br />
                - Актуализация профессиональных знаний через повышение
                квалификации <br />
                - Запись в публичном Реестре аттестованных налоговых
                консультантов
                <br />
                - Возможность войти в реестр Европейской конфедерации налоговых
                консультантов <br />
                - Присоединение к корпоративному проекту добровольного
                медицинского страхования (ДМС) <br />
              </p>
            </div>
          </div>
          <a
            href="/request/"
            class="btn btn-primary btn-lg mt-2 mt-md-0 mx-auto"
            >Заполнить заявление</a
          >
        </div>
      </section>
      <section
        class="section "
        id="current-nalog"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="100"
        style="margin-top:120px; display:none;" 

      >
        <div class="container bring-to-front">
          <div class="row gap-y align-items-center">
            

            <div class="col-12 col-md-6 col-lg-6">
              <div class="row gap-y">
                <div class="col-6">
                  <div
                    class="rounded shadow-box p-2 p-sm-3 d-flex align-items-center flex-wrap bg-contrast"
                  >
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud mr-4 stroke-secondary"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg> -->

                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="feather feather-download-cloud mr-4"
                    >
                      <path
                        d="M5.39343 10.7758C5.39343 10.4133 5.68725 10.1195 6.04968 10.1195H37.5698C37.9322 10.1195 38.226 10.4133 38.226 10.7758V31.1063C38.226 31.4687 37.9322 31.7625 37.5698 31.7625H6.04968C5.68725 31.7625 5.39343 31.4687 5.39343 31.1063V10.7758Z"
                        fill="#333"
                      />
                      <path
                        d="M3.77393 9.09967C3.77393 8.73723 4.06774 8.44342 4.43018 8.44342H35.9503C36.3127 8.44342 36.6065 8.73723 36.6065 9.09967V29.4302C36.6065 29.7926 36.3127 30.0864 35.9503 30.0864H4.43018C4.06774 30.0864 3.77393 29.7926 3.77393 29.4302V9.09967Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.43018 7.78717H35.9503C36.6752 7.78717 37.2628 8.3748 37.2628 9.09967V29.4302C37.2628 30.1551 36.6752 30.7427 35.9503 30.7427H4.43018C3.7053 30.7427 3.11768 30.1551 3.11768 29.4302V9.09967C3.11768 8.3748 3.7053 7.78717 4.43018 7.78717ZM4.43018 8.44342C4.06774 8.44342 3.77393 8.73723 3.77393 9.09967V29.4302C3.77393 29.7926 4.06774 30.0864 4.43018 30.0864H35.9503C36.3127 30.0864 36.6065 29.7926 36.6065 29.4302V9.09967C36.6065 8.73723 36.3127 8.44342 35.9503 8.44342H4.43018Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.81982 16.2593C8.81982 16.0781 8.96673 15.9312 9.14795 15.9312H31.2327C31.4139 15.9312 31.5608 16.0781 31.5608 16.2593C31.5608 16.4405 31.4139 16.5874 31.2327 16.5874H9.14795C8.96673 16.5874 8.81982 16.4405 8.81982 16.2593Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.5924 12.5659C15.5924 12.3847 15.7393 12.2378 15.9205 12.2378H23.871C24.0523 12.2378 24.1992 12.3847 24.1992 12.5659C24.1992 12.7471 24.0523 12.894 23.871 12.894H15.9205C15.7393 12.894 15.5924 12.7471 15.5924 12.5659Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.81982 17.9525C8.81982 17.7713 8.96673 17.6244 9.14795 17.6244H31.2327C31.4139 17.6244 31.5608 17.7713 31.5608 17.9525C31.5608 18.1337 31.4139 18.2806 31.2327 18.2806H9.14795C8.96673 18.2806 8.81982 18.1337 8.81982 17.9525Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.81982 19.9464C8.81982 19.7652 8.96673 19.6183 9.14795 19.6183H31.2327C31.4139 19.6183 31.5608 19.7652 31.5608 19.9464C31.5608 20.1276 31.4139 20.2745 31.2327 20.2745H9.14795C8.96673 20.2745 8.81982 20.1276 8.81982 19.9464Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.81982 21.934C8.81982 21.7528 8.96673 21.6059 9.14795 21.6059H31.2327C31.4139 21.6059 31.5608 21.7528 31.5608 21.934C31.5608 22.1153 31.4139 22.2622 31.2327 22.2622H9.14795C8.96673 22.2622 8.81982 22.1153 8.81982 21.934Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.81982 23.7743C8.81982 23.5931 8.96673 23.4462 9.14795 23.4462H19.4542C19.6354 23.4462 19.7823 23.5931 19.7823 23.7743C19.7823 23.9555 19.6354 24.1024 19.4542 24.1024H9.14795C8.96673 24.1024 8.81982 23.9555 8.81982 23.7743Z"
                        fill="#333"
                      />
                      <path
                        d="M29.3521 26.3149H32.8856V32.5722L31.1188 30.8054L29.3521 32.5722V26.3149Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.6958 26.3149C28.6958 25.9524 28.9896 25.6586 29.3521 25.6586H32.8856C33.248 25.6586 33.5419 25.9524 33.5419 26.3149V32.5722C33.5419 32.8376 33.382 33.0769 33.1367 33.1785C32.8915 33.2801 32.6093 33.2239 32.4216 33.0363L31.1188 31.7335L29.8161 33.0363C29.6284 33.2239 29.3461 33.2801 29.1009 33.1785C28.8557 33.0769 28.6958 32.8376 28.6958 32.5722V26.3149ZM31.1188 30.8054L32.8856 32.5722V26.3149H29.3521V32.5722L31.1188 30.8054Z"
                        fill="#333"
                      />
                      <path
                        d="M34.1036 26.5161C34.1036 28.122 32.8182 29.4239 31.2326 29.4239C29.647 29.4239 28.3616 28.122 28.3616 26.5161C28.3616 24.9102 29.647 23.6083 31.2326 23.6083C32.8182 23.6083 34.1036 24.9102 34.1036 26.5161Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M34.7599 26.5161C34.7599 28.4766 33.1885 30.0802 31.2326 30.0802C29.2767 30.0802 27.7053 28.4766 27.7053 26.5161C27.7053 24.5556 29.2767 22.952 31.2326 22.952C33.1885 22.952 34.7599 24.5556 34.7599 26.5161ZM31.2326 29.4239C32.8182 29.4239 34.1036 28.122 34.1036 26.5161C34.1036 24.9102 32.8182 23.6083 31.2326 23.6083C29.647 23.6083 28.3616 24.9102 28.3616 26.5161C28.3616 28.122 29.647 29.4239 31.2326 29.4239Z"
                        fill="#333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.4222 26.516C33.4222 27.7282 32.4499 28.7251 31.2328 28.7251C30.0158 28.7251 29.0435 27.7282 29.0435 26.516C29.0435 25.3039 30.0158 24.307 31.2328 24.307C32.4499 24.307 33.4222 25.3039 33.4222 26.516ZM31.2328 28.0688C32.0796 28.0688 32.766 27.3736 32.766 26.516C32.766 25.6585 32.0796 24.9633 31.2328 24.9633C30.3861 24.9633 29.6997 25.6585 29.6997 26.516C29.6997 27.3736 30.3861 28.0688 31.2328 28.0688Z"
                        fill="#333"
                      />
                    </svg>
                    <div class="text-left">
                      <p
                        class="counter font-md bold m-0 text-primary"
                        style="visibility: visible"
                      >
                        100
                      </p>
                      <p class="m-0">
                        Образовательных <br />
                        организаций
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div
                    class="rounded shadow-box shadow-hover p-2 p-sm-3 d-flex align-items-center flex-wrap text-contrast"
                    style="background-color:#04A27C;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-download-cloud mr-4 stroke-secondary"
                    >
                      <path
                        d="M17.5948 10.9319C19.1972 10.9319 20.497 9.63298 20.497 8.03064C20.497 6.42831 19.1972 5.12939 17.5948 5.12939"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.9291 14.0848C19.4076 14.1178 19.8833 14.1856 20.3517 14.291C21.0026 14.4184 21.7854 14.6852 22.0641 15.2691C22.2419 15.6431 22.2419 16.0785 22.0641 16.4534C21.7863 17.0374 21.0026 17.3032 20.3517 17.437"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.28998 10.9319C4.68765 10.9319 3.38782 9.63298 3.38782 8.03064C3.38782 6.42831 4.68765 5.12939 6.28998 5.12939"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.95577 14.0848C4.47727 14.1178 4.00152 14.1856 3.5331 14.291C2.88227 14.4184 2.09943 14.6852 1.82168 15.2691C1.64293 15.6431 1.64293 16.0785 1.82168 16.4534C2.09852 17.0374 2.88227 17.3032 3.5331 17.437"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9378 14.7095C15.1846 14.7095 17.9584 15.2009 17.9584 17.1671C17.9584 19.1325 15.2029 19.6421 11.9378 19.6421C8.69003 19.6421 5.91711 19.1508 5.91711 17.1845C5.91711 15.2183 8.67261 14.7095 11.9378 14.7095Z"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9377 11.9049C9.79638 11.9049 8.07947 10.188 8.07947 8.04575C8.07947 5.90442 9.79638 4.1875 11.9377 4.1875C14.0791 4.1875 15.796 5.90442 15.796 8.04575C15.796 10.188 14.0791 11.9049 11.9377 11.9049Z"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="text-left">
                      <p
                        class="counter font-md bold m-0"
                        style="visibility: visible"
                      >
                        21 000
                      </p>
                      <p class="m-0">Выпускников</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="rounded shadow-box p-2 p-sm-3 d-flex align-items-center flex-wrap bg-contrast"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-download-cloud mr-4 stroke-secondary"
                    >
                      <path
                        d="M3.09253 9.40427H20.9165"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.442 13.3097H16.4512"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0047 13.3097H12.014"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.55793 13.3097H7.5672"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.442 17.1962H16.4512"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0047 17.1962H12.014"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.55793 17.1962H7.5672"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.0438 2V5.29078"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.9654 2V5.29078"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div class="text-left">
                      <p
                        class="counter font-md bold m-0 text-primary"
                        style="visibility: visible"
                      >
                        20
                      </p>
                      <p class="m-0">лет на рынке</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 pr-3">
                  <div
                    class="rounded shadow-box p-2 p-sm-3 d-flex align-items-center flex-wrap bg-contrast"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-download-cloud mr-4 stroke-secondary"
                    >
                      <path
                        d="M2.80408 15.477C2.80408 15.477 2.94608 17.215 2.97908 17.763C3.02308 18.498 3.30708 19.319 3.78108 19.889C4.45008 20.697 5.23808 20.982 6.29008 20.984C7.52708 20.986 16.5221 20.986 17.7591 20.984C18.8111 20.982 19.5991 20.697 20.2681 19.889C20.7421 19.319 21.0261 18.498 21.0711 17.763C21.1031 17.215 21.2451 15.477 21.2451 15.477"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.49597 5.32949V4.95849C8.49597 3.73849 9.48397 2.75049 10.704 2.75049H13.286C14.505 2.75049 15.494 3.73849 15.494 4.95849L15.495 5.32949"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.995 16.6782V15.3842"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.74988 8.38912V11.8561C4.66788 13.1211 6.96588 14.0071 9.48788 14.3581C9.78988 13.2571 10.7829 12.4501 11.9899 12.4501C13.1779 12.4501 14.1909 13.2571 14.4729 14.3681C17.0049 14.0171 19.3119 13.1311 21.2399 11.8561V8.38912C21.2399 6.69512 19.8769 5.33112 18.1829 5.33112H5.81688C4.12288 5.33112 2.74988 6.69512 2.74988 8.38912Z"
                        stroke="#333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div class="text-left">
                      <p
                        class="counter font-md bold m-0 text-primary"
                        style="visibility: visible"
                      >
                        100
                      </p>
                      <p class="m-0">
                        Деловых<br />
                        мероприятий
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-6 mr-md-auto text-left text-lg-left"

            >
              <div class="row pl-3 pr-3">
                <!-- <span class="badge badge-primary badge-pill bold px-4 py-2">Глобальное партнерство</span> -->

                <h2 class="">
                  <span class="bold "
                    >Палата налоговых консультантов</span
                  >
                </h2>
                <!-- <h2 class="mt-3"><span class="bold">Industry leading</span> technology stack</h2> -->
                <p class="mr-5 bold">
                  C 2002 года объединяет профессионалов в сфере налогообложения
                  – аттестованных консультантов по налогам и сборам. Членами
                  Палаты являются специалисты, чей уровень профессионализма
                  обеспечен качественной подготовкой по специально разработанным
                  программам, а квалификация подтверждена квалификационным
                  аттестатом единого образца, выдаваемым Палатой. <br />
                </p>
                <!-- <figure class="ma-10"><img src="logo2.svg" class="img-responsive mx-auto ma-2" style='max-height:150px;' alt=""></figure> -->
                <figure class="mb-4">
                  <img
                    width="70%"
                    src="http://f.atknin.tech/f/yste_all.svg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="section with-promo "
        id="org-nalog"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="100"
        style="margin-top:80px !important"
      >
        <div class="container ">
          <div class="row gap-y align-items-center">
            <div class="col-md-12">
              <div class="section-heading">
                <h2 class=" bold">
                  Официальные спикеры и лекторы
                </h2>
              </div>
             
            <section class="hero-section">
              <div class="card-grid">
                <a class="card-spicker" v-for='lec in lectors_short'>
                  <div class="card__background" :style="lector_background(lec.photo)"></div>
                  <div class="card__content">
                    <!-- <p class="card__category">Category</p> -->
                    <h3 class="card__heading">{{lec.name}} </h3>
                  </div>
                </a>
              </div>
            </section>
            <div class="mt-4" style="">
              <a href="/lectors/" class="lead"> <strong>Все лекторы </strong><i class="fas fa-long-arrow-alt-right ml-2"></i>  </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section with-promo mt-10" 
        id="org-nalog">
        <div class="container" style="padding-bottom:0px; !important;">
          <div class="row gap-y align-items-center">
            <div class="col-md-12">
              <div class="section-heading mb-0">
                <h2 class=" bold">
                 Информация для образовательных организаций
                </h2>
                <p class="lead"> </p>
              </div>
                <v-row>
                  <v-col cols='6'> 
                    <div :class="tragectory1.class"  @click="change_tragectory(true)" style="cursor:pointer;">
                      <v-row class="ml-4 mr-4">
                          <div class="blob_1 mt-4"></div>
                        <h4  
                          > Как стать аккредитованной образовательной организацией
                          <!-- <i class="fas fa-arrow-up ml-2" v-if='block_expand.ec_profile' ></i> 
                          <i class="fas fa-arrow-down ml-2" v-else ></i>  -->
                          </h4>
                            Профессиональная переподготовка по программам «Налоговое консультирование» Союза «ПНК» осуществляется совместно с аккредитованными образовательными организациями в различных регионах России.
                            
                            <div v-if='block_expand.ec_profile' class="mt-2">
                            Преимущества обучения по нашим программам: <br>
                                - Соответствует требованиям законодательства о налогах и сборах и сопряженными отраслями права (ГК РФ, ТК РФ, банкротное законодательство и т.п.), а также требованиям проф. стандарта «Консультант по налогам и сборам»  <br>
                                - Унифицирована, то есть налоговый консультант, прошедший подготовку в Южно-Сахалинске, получил те же знания, умения , навыки и компетенции, что и налоговый консультант, обучившийся в Москве и других регионах <br>
                                - Актуализируется практикующими налоговыми консультантами в соответствии с методами работы налоговых органов и судебной практикой <br>
                                - Разработка программы не под возможности конкретного вуза с учетом преподавательского состава, а под потребности постоянно изменяющейся практики в сфере налогового консультирования <br>
                                - Программа учитывает риски практической деятельности налоговых консультантов и вопросов связанной с этим ответственности. 
                                <br> <br>
                                Палата налоговых консультантов как разработчик программы под целевые задачи проф. сообщества контролирует качество доведения до потребителя содержание программы (интеллектуального ресурса): <br>
                                -	Разработка и обеспечение каждого претендента учебно-методическими пособиями <br>
                                -	Разработка оценочных средств (экзаменационных заданий) с обязательным предэкзаменационным консультированием по каждому заданию <br>
                                -	Актуалализация знаний непосредственно в процессе обкчения по интересующим слушателей темам на безвозмездной основе через мероприятия Палаты
                            </div>
                        </v-row>
                        
                    </div>
                  </v-col>
                  <v-col cols='6'> 
                    <div :class="tragectory2.class"  @click="change_tragectory(false)" style="cursor:pointer;">
                    <v-row class="ml-4 mr-4">
                          <div class="blob_2 mt-4"></div>
                        <h4  > Информация для аккредитованныых образовательных организаций
                          <!-- <i class="fas fa-arrow-up ml-2" v-if='block_expand.ec_profile' ></i> 
                          <i class="fas fa-arrow-down ml-2" v-else ></i>  -->
                          </h4>
                            Если вы практикуете в области налогообложения (бухгалтер, аудитор, финансовый директор и т.п.) или налогового консультирования (консультант, адвокат, юрист и т.п.) присоединитесь к проф.сообществу Союз «ПНК» через индивидуальную профессиональную траекторию!
                            
                            <div v-if='block_expand.ec_profile' class="mt-2">
                            Преимущества обучения по нашим программам: <br>
                                - Соответствует требованиям законодательства о налогах и сборах и сопряженными отраслями права (ГК РФ, ТК РФ, банкротное законодательство и т.п.), а также требованиям проф. стандарта «Консультант по налогам и сборам»  <br>
                                - Унифицирована, то есть налоговый консультант, прошедший подготовку в Южно-Сахалинске, получил те же знания, умения , навыки и компетенции, что и налоговый консультант, обучившийся в Москве и других регионах <br>
                                - Актуализируется практикующими налоговыми консультантами в соответствии с методами работы налоговых органов и судебной практикой <br>
                                - Разработка программы не под возможности конкретного вуза с учетом преподавательского состава, а под потребности постоянно изменяющейся практики в сфере налогового консультирования <br>
                                - Программа учитывает риски практической деятельности налоговых консультантов и вопросов связанной с этим ответственности. 
                                <br> <br>
                                Палата налоговых консультантов как разработчик программы под целевые задачи проф. сообщества контролирует качество доведения до потребителя содержание программы (интеллектуального ресурса): <br>
                                -	Разработка и обеспечение каждого претендента учебно-методическими пособиями <br>
                                -	Разработка оценочных средств (экзаменационных заданий) с обязательным предэкзаменационным консультированием по каждому заданию <br>
                                -	Актуалализация знаний непосредственно в процессе обкчения по интересующим слушателей темам на безвозмездной основе через мероприятия Палаты
                            </div>
                            
                        </v-row>
                    </div>
                  </v-col>
                </v-row>
                  
                <div class="rounded-lg bg-image-2 shadow mt-5" style="display:none">
                  <v-row class="ml-4 mr-4">
                      <sub>Базовое образование</sub>
                      <h3 @click="expand('ur_profile')"  style="cursor:pointer; "> Юридическое 
                         <i class="fas fa-arrow-up ml-2" v-if='block_expand.ur_profile' ></i> 
                        <i class="fas fa-arrow-down ml-2" v-else ></i> 
                        </h3>
                      Программа «Налоговое консультирование» реализуется в
                      партнерстве с образовательными организациями в сфере ДПО в 20
                      регионах России. Кроме того, ряд образовательных партнеров активно
                      применяют дистанционные технологии при реализации программы,
                      что делает подготовку возможной в любом уголке страны.
                      <div v-if='block_expand.ur_profile' class="mt-2"> Описание описание</div>
                      <div v-if='block_expand.ur_profile' class="mt-2"> Описание описание</div>
                      <div v-if='block_expand.ur_profile' class="mt-2"> Описание описание</div>
                  </v-row>
                </div>

                <div class="rounded-lg  bg-contrast shadow mt-5" style="display:none">
                  <v-row class="ml-4 mr-4">
                    <v-col cols='6' >
                      <h3 @click="expand('diff_profile')" style="cursor:pointer"> Другое 
                        <i class="fas fa-arrow-up ml-2" v-if='block_expand.diff_profile' ></i> 
                        <i class="fas fa-arrow-down ml-2" v-else ></i> 
                        
                        </h3>
                      <!-- <sup>У вас нет профильного образования</sup> -->
                    </v-col>
                    <v-col cols='6' style='display:none'>
                      Подготовка налоговых консультантов по программам Палаты налоговых консультантов аккредитованными образовательными организациями
                      <div v-if='block_expand.diff_profile' class="mt-2"> 
                        Преимущества обучения по нашим программам:
                          - Соответствует требованиям законодательства о налогах и сборах и сопряженными отраслями права (ГК РФ, ТК РФ, банкротное законодательство и т.п.), а также требованиям проф. стандарта «Консультант по налогам и сборам» (в процессе утверждения, подробнее>>>)
                          - Унифицирована, то есть налоговый консультант, прошедший подготовку в Южно-Сахалинске, получил те же знания, умения , навыки и компетенции, что и налоговый консультант, обучившийся в Москве и других регионах
                          - Актуализируется практикующими налоговыми консультантами в соответствии с методами работы налоговых органов и судебной практикой
                          - Разработка программы не под возможности конкретного вуза с учетом преподавательского состава, а под потребности постоянно изменяющейся практики в сфере налогового консультирования
                          - Программа учитывает риски практической деятельности налоговых консультантов и вопросов связанной с этим ответственности. 

                          Палата налоговых консультантов как разработчик программы под целевые задачи проф. сообщества контролирует качество доведения до потребителя содержание программы (интеллектуального ресурса):
                          -	Разработка и обеспечение каждого претендента учебно-методическими пособиями
                          -	Разработка оценочных средств (экзаменационных заданий) с обязательным предэкзаменационным консультированием по каждому заданию
                          -	Актуалализация знаний непосредственно в процессе обкчения по интересующим слушателей темам на безвозмездной основе через мероприятия Палаты

                      </div>
                    </v-col>
                  </v-row>
                </div>
            </div>
          </div>
        </div>
        <div class="container" style='display:none'>
          <div class="row gap-y align-items-center">
            <div class="section-heading">
               
                <!-- <p class="lead">The More you Pay the More you Earn</p> -->
              </div>
            <div class="col-md-7">
              <p class="mb-5 bold" >
                Палата приглашает образовательные организации к сотрудничеству и
                реализации дополнительных профессиональных программ Палаты по
                повышению квалификации и профессиональной переподготовке
                специалистов в сфере налогообложения.Каталог образовательных
                организаций Программы разработаны экспертами Палаты, в полной
                мере отвечают потребностям специалистов в получении прикладных
                знаний в сфере налогового права и налогообложения, а также
                требованиям законодательства об образовании.Налоговое
                консультирование – целевые программы подготовки консультантов по
                налогам и сборам.
              </p>
              <v-btn  @click="page('/request-org/')" outlined >
                Заполнить заявку на аккредитацию
                </v-btn >

            </div>
            <div class="col-md-5">
              <v-expansion-panels accardion>
                <v-expansion-panel v-for="(item, i) in quest_org" :key="i">
                  <v-expansion-panel-header>{{
                    item.title
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ item.text }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            
          </div>
        </div>
      </section>
      


      <section class="section" style="display:none;">
        <div class="">
          <div class="section-heading container">
              <h2 class=" bold">
                Все о налогах
              </h2>
              <!-- <p class="lead">The More you Pay the More you Earn</p> -->
            </div>
            <v-row >
              <v-col cols='8'>
              <v-row
                class="mb-6 pl-2"
              >
                <v-col
                  v-for="n in 3"
                  :key="n"
                  cols='4'
                  
                >
                  <v-card class="">
                

                    <v-card-title>
                      Заседание
                    </v-card-title>

                    <v-card-subtitle>
                      Открытое заседание Научно-экспертного совета Палаты налоговых консультантов
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        color="green lighten-2"
                        text
                      >
                        Перейти
                      </v-btn>

                      <v-spacer></v-spacer>

                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col cols='7'>
                  <v-card
                    class="ma-2"
                    tile
                    outlined
                    rounded
                    style="height:93%"
                  >
                    <iframe  class="rounded" style="height:100%; width:100%"  src="https://www.youtube.com/embed/1FvDWNB3B7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </v-card>
                </v-col>
               
                <v-col cols='5'>
                  <v-card
                    class="ma-2"
                    tile
                    rounded
                    outlined
                  >
                    <iframe class="rounded"  style="height:100%; width:100%" src="https://www.youtube.com/embed/XeJ19yMCAF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </v-card>
                  <v-card
                    class="ma-2"
                    tile
                    outlined
                  >
                    <iframe class="rounded"  style="height:100%; width:100%" src="https://www.youtube.com/embed/v19CG9sspF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </v-card>
                </v-col>
                
              </v-row>
            </v-col>

            <v-col cols="4">

              <v-card class="mr-2 pl-1 bg-image-6" style="height:100%" 
                    rounded
               dark color="#04A27C">
                    

                    <v-card-title class="bold">
                      Новости
                    </v-card-title>

                    <v-card-subtitle>
                      от USPEX BOT
                    </v-card-subtitle>

                    <v-card-actions v-for='i in [1,2,3,4,5]'>
                      <span class="bold">
                        - Последние решения Федеральной налоговой службы (ФНС). 
                      </span>
                      <v-spacer></v-spacer>
                      <v-btn
                        icon
                        @click="show = !show"
                      >
                        <v-icon>mdi-link</v-icon>
                      </v-btn>
                    </v-card-actions>

                  </v-card>

            </v-col>

            </v-row>
            
          
        </div>
      </section>

      <footer class="site-footer section mt-10">
        <div class="container pb-4">
          <div class="row gap-y text-center text-md-left">
            <div class="col-md-4 mr-auto">
              <img src="../../assets/logo3.svg" alt="" class="logo" />
              <p class="mt-2 mb-md-0 b  text-md-left">
                © 2002-2021 Все права защищены. <br>
                <small>При воспроизведении материалов на других сайтах обязательна
                гиперссылка на palata-nk.ru</small>
              </p>
            </div>
            <div class="col-md-2">
              <h6 class="bold b text-dark">Контакты</h6>
              <nav class="nav flex-column">
                <a class="nav-item b" href="about.html">+7 495 380-41-61 </a>
                <a class="nav-item b" href="about.html">+7 903 130-05-74</a>
              </nav>
               <nav class="nav mt-2">
                <a
                  href="https://www.facebook.com/palatanalog"
                  class="btn btn-circle btn-sm btn-primary mr-1"
                  ><i class="fab fa-facebook"></i
                ></a>
                <a
                  href="https://www.youtube.com/channel/UC9L8GL4f9y1r4I8mD9sO8TQ"
                  class="btn btn-circle btn-sm btn-primary mr-1"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="https://www.instagram.com/palata_nk/" class="btn btn-circle btn-sm btn-primary"
                  ><i class="fab fa-instagram"></i
                ></a>
              </nav>
            </div>
            <div class="col-md-2">
              <nav class="nav flex-column">
                <h6 class="bold b text-dark">Офис палаты</h6>
                <a class="nav-item b" href="#"
                  >г. Москва, метро Курская, Красные ворота, улица Земляной Вал,
                  дом 4, строение 1</a
                >
              </nav>
            </div>
            <div class="col-md-2">
              <nav class="nav flex-column">
                <h6 class="bold b text-dark">Палата налоговых консультантов</h6>
                <a class="nav-item b" href="#">О Палате</a>
                <a class="nav-item b" href="#">Налоговое бюро</a>
                <a class="nav-item b" href="#">Членство</a>
                <!-- <a class="nav-item b " href="#">Реестры</a>
                        <a class="nav-item b " href="#">Международная деятельность</a>
                        <a class="nav-item b " href="#">Проекты</a>
                        <a class="nav-item b " href="#">Коворкинг</a>
                        <a class="nav-item b " href="#">Мероприятия</a> -->
              </nav>
            </div>
          </div>
          <hr class="mt-5" />
       
          <cookie-consent>
            <template
              slot="message"
            >
            <div class='mr-6 mb-2'>
               Сайт использует файлы «cookie», с целью персонализации сервисов
                и повышения удобства пользования веб-сайтом. «Cookie»
                представляют собой небольшие файлы, содержащие информацию о
                предыдущих посещениях веб-сайта. Если вы не хотите использовать
                файлы «cookie», измените настройки браузера.
            </div>
            
            </template>

            <template
              slot="button"
            >
              <button class="btn btn-primary">Подтвердить</button>
            </template>
          </cookie-consent>
        </div>
      </footer>
    </main>
    <!-- themeforest:js -->
  </div>
</template>

<style  scoped>
.hero-section{
  align-items: flex-start;
  background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%);
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
}

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
}

@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media(min-width: 960px){
  .card-grid{
    grid-template-columns: repeat(6, 1fr); 
  }
}

.card-spicker{
  list-style: none;
  position: relative;
}

.card-spicker:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background{
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition: 
    filter 200ms linear,
    transform 200ms linear;
}

.card-spicker:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(30px);
}

.card__content{
  left: 10px;
  padding: var(--spacing-l);
  position: absolute;
  bottom: 0;
  color:white;
}

.card__category{
  color: var(--text-light);
  font-size: 0.7rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.2rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}
</style>
<style scoped>
/* Variables */
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);


/* Styling */
.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;
}
.timeline:before {
  background-color: black;
  content: '';
  position: absolute;
  top: 0;
  left: 2em;
  width: 2px;
  height: 100%;
}

.timeline-event {
  position: relative;
}
.timeline-event:hover .timeline-event-icon {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #04A27C;
}
.timeline-event:hover .timeline-event-thumbnail {
  -moz-box-shadow: inset 40em 0 0 0 #04A27C;
  -webkit-box-shadow: inset 40em 0 0 0 #04A27C;
  box-shadow: inset 40em 0 0 0 #04A27C;
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
}
.timeline-event-copy h3 {
  font-size: 1.75em;
}
.timeline-event-copy h4 {
  font-size: 1.2em;
  margin-bottom: 1.2em;
}
.timeline-event-copy strong {
  font-weight: 700;
}
.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1.2em;
}

.timeline-event-icon {
  -moz-transition: -moz-transform 0.2s ease-in;
  -o-transition: -o-transform 0.2s ease-in;
  -webkit-transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: black;
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 2em;
  left: -0.9em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  -moz-transition: box-shadow 0.5s ease-in 0.1s;
  -o-transition: box-shadow 0.5s ease-in 0.1s;
  -webkit-transition: box-shadow 0.5s ease-in;
  -webkit-transition-delay: 0.1s;
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.75em;
  background-color: black;
  -moz-box-shadow: inset 0 0 0 0em #16336E;
  -webkit-box-shadow: inset 0 0 0 0em #16336E;
  box-shadow: inset 0 0 0 0em #16336E;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}

</style>
<style scoped >
.cherdack {
  -webkit-box-shadow: 0 0 16px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 9px 16px 0 rgb(0 0 0 / 20%);
  
}
.btn-shadow{
  -webkit-box-shadow: 0 0 16px rgb(51 51 51 / 20%);
    box-shadow: 0 0 16px rgb(51 51 51 / 20%);
}
.icon-mb{
  margin-bottom: 3px;
  margin-right: 3px;
}
.nav-link{
    color:#333 !important;
  cursor: pointer !important;
}
.btn-primary{
  color: #F0EFED !important;
  cursor: pointer !important;
}
.b {
  color: #333 !important;
}
.b-white {
  color: #F0EFED !important;
}
.dark-green-text{
  color: #16336E !important;
}
.bg-image-1{
  background: #04A27C url('https://pro-women.ru/local/templates/prowomen/assets/img/index/liderBg.png') bottom left no-repeat !important;
  color: white !important;
  font-weight: 500;
}

.bg-image-2{
  background: #16336E url('https://pro-women.ru/local/templates/prowomen/assets/img/index/liderBg.png') bottom left no-repeat !important;
  color: white !important;
  font-weight: 500;
}
.bg-image-1 h4{
  color:white;
}
.bg-image-2 h4{
  color:white;
}
.inactive-my{
  background: rgba(0, 0, 0, 0.096) url('https://pro-women.ru/local/templates/prowomen/assets/img/index/liderBg.png') bottom left no-repeat !important;
  font-weight: 500;
  color: rgba(51, 51, 51, 0.97);
  box-shadow: 0 2px 3px rgba(0,0,0,.2);
}
.muted-inactive-my{
  background: rgba(0, 0, 0, 0.017) url('https://pro-women.ru/local/templates/prowomen/assets/img/index/liderBg.png') bottom left no-repeat !important;
  font-weight: 500;
  box-shadow: 0 2px 3px rgba(0,0,0,.2);
}
.muted-inactive-my *{
  background: rgba(0, 0, 0, 0.0016) url('https://pro-women.ru/local/templates/prowomen/assets/img/index/liderBg.png') bottom left no-repeat !important;
  color: rgba(51, 51, 51, 0.27) !important;
}
.bg-image-3{
  background: #eff8f3  100% 100% no-repeat !important;
  background-size: cover; /* Масштабируем фон */
  color: white !important;
  font-weight: 500;
  border-radius: 10px;
}
.bg-image-4{
  background: linear-gradient(#effdf6 , #fff) url('https://pro-women.ru/local/templates/prowomen/assets/img/mentoring/mentoring-manual-item-bg.svg') top right no-repeat !important;
}
.bg-image-5{
  background: #04A27C url('https://pro-women.ru/local/templates/prowomen/assets/img/index/soviet-bg.svg') top right no-repeat !important;
  color: white !important;
  font-weight: 500;
}
.bg-image-6{
  background: #04A27C url('https://pro-women.ru/local/templates/prowomen/assets/img/index/subscribeBg.png') bottom right no-repeat !important;
  color: white !important;
  font-weight: 500;
}
.bg-image-0{
  background: linear-gradient(252.6deg, #04A27C -3.65%, #067D61 104.61%) !important;
}
/*  */

.gg-arrow-long-right {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  box-shadow: inset 0 0 0 2px;
  width: 50%;
  top: 40%;
  left: 40%;
  right: 10%;
  height: 6px;
}
.gg-arrow-long-right::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 6px;
  height: 6px;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  right: 0;
  bottom: -2px;
}
@import "https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,700,900";
@import "https://fonts.googleapis.com/css?family=Caveat";

@import "./landing_css/theme.css";

@import "./landing_css/all.css";
/* @import "./landing_css/aos.css"; */
@import "./landing_css/cookieconsent.min.css";
@import "./landing_css/magnific-popup.css";
@import "./landing_css/odometer-theme-minimal.css";
@import "./landing_css/prism-okaidia.css";
@import "./landing_css/simplebar.css";
@import "./landing_css/smart_wizard.css";
@import "./landing_css/smart_wizard_theme_arrows.css";
@import "./landing_css/smart_wizard_theme_circles.css";
@import "./landing_css/smart_wizard_theme_dots.css";
@import "./landing_css/swiper.css";
@import "./landing_css/theme.css";
@import "./landing_css/rtl.css";
@import "./landing_css/hover_menu.css";
@media (min-width: 1904px) {
  .container {
    max-width: 1185px !important;
  }
}



/* GENERAL */
@import url('https://fonts.googleapis.com/css?family=Rubik');
.credit {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  color: white;
}
.credit a {
  color: inherit;
}

.swipe {
  width: 40%;
  height:.25rem;
  opacity: .15;
  border-radius: 10px;
  margin: .5rem auto;
}

.icons {
  display: flex;
  margin-top: .5rem;
}
.battery {
  width: .85rem;
  height: .45rem;
}
.network {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6.8px 7.2px 6.8px;
  transform: rotate(135deg);
  margin: .12rem .5rem;
}

/* Middle */
.phone .content {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  width: 100%;
  transform: translateY(5%);
}

label, .toggle {
  height: 3.1rem;
  border-radius: 100px;
}
label {
  width: 100%;
  background-color: rgba(0,0,0,.1);
  border-radius: 100px;
  position: relative;
  margin: 1.8rem 0 4rem 0; 
  cursor: pointer;
}
.toggle {
  position: absolute;
  width: 50%;
  background-color: #04A27C;
  color: #fff !important ;
  box-shadow: 0 2px 15px rgba(0,0,0,.15);
  transition: transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.toggle *{
  font-weight: 700;
}
.names {
  font-size: 100%;
  font-weight: bolder;
  width: 75%;
  margin-left: 12.5%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  user-select: none;
}
.dark {
  opacity: .5;
}
.mark {
  border-radius: 100px;
  background-color: black;
}
.mark {
  width: 7%;
  margin: auto;
  position: relative;
  height: .25rem;
}
.mark::before {
  content: '';
  position: absolute;
  width: .25rem;
  height: 100%;
  left: -70%;
  opacity: .15;
  background-color: inherit;
}
.mark::after {
  content: '';
  position: absolute;
  width: .25rem;
  height: 100%;
  right: -70%;
  opacity: .15;
  background-color: inherit;
}

/* Bottom */
.skip {
  padding: 1.5rem 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.skip p {
  opacity: .55;
  font-size: 90%;
  cursor: pointer;
  transition: all 2s ease;
}
.skip p:hover {
   text-decoration: underline;
}
.fab {
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: transform .5s cubic-bezier(0.19, 1, 0.22, 1);
}
.fab:hover {
  transform: scale(1.2);
}
.arrow {
  width: 40%;
  height: .1rem;
  background-color: black;
}
.arrow::before {
  content: '';
  position: absolute;
  height: .1rem;
  width: 20%;
  background-color: inherit;
  transform: rotate(45deg);
  right: 26%;
  top: 42%;
}
.arrow::after {
  content: '';
  position: absolute;
  height: .1rem;
  width: 20%;
  background-color: inherit;
  transform: rotate(-45deg);
  right: 26%;
  bottom: 42%;
}


/* -------- Switch Styles ------------*/
[type="checkbox"] {
  display: none;
}
/* Toggle */
[type="checkbox"]:checked + .app .toggle{
  transform: translateX(100%);
  background-color: #16336E;
}
[type="checkbox"]:checked + .app .dark{
  opacity: 1;
}
[type="checkbox"]:checked + .app .light{
  opacity: .5;
}
/* App */
[type="checkbox"]:checked + .app .light{
}
[type="checkbox"]:checked + .app .dark{
  color: white;
}
/* Circle */
[type="checkbox"]:checked + .app .crescent{
  transform: scale(1);
  background: #26242E;
}
[type="checkbox"]:checked + .app .circle{
  background: linear-gradient(40deg, #8983F7, #A3DAFB 70%);
}
[type="checkbox"]:checked + .app .main-circle{
  background: linear-gradient(40deg, #8983F7, #A3DAFB 70%);
}
/* Fab */
[type="checkbox"]:checked + .app .fab{
  background-color: #16336E;
}
[type="checkbox"]:checked + .app .arrow,
[type="checkbox"]:checked + .app .mark,
[type="checkbox"]:checked + .app .battery{
  background-color: white;
}
[type="checkbox"]:checked + .app .network{
  border-color: transparent transparent white transparent;
}
[type="checkbox"]:checked + .app .swipe{
  background-color: #16336E;
  opacity: 1;
}
.opacity-bg{
  background-color:rgba(255, 255, 255, 0.95);
}
.height-300{
  height: 350px;
}
.blob_2 {
	background: #16336E;
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;

	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: pulse 2s infinite;
}
.blob_1 {
	background: #04A27C;
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;

	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>


<script>
import AOS from "aos";
import CookieConsent from 'vue-cookieconsent-component'
import { mapState, mapActions,mapGetters } from 'vuex'

export default {
  data() {
    return {
      tragectory_individual: false,
      started: false,
      block_expand:{
        ur_profile:false,
        ec_profile:false,
        diff_profile:false
      },
      events:[
        {
          sub: 'Тренинг',
          name: 'Психологический инструментарий в работе налогового консультанта',
          date: '30-31 августа 2021',
          link: 'https://palata-nk.ru/events/trening/trening/'
        
        },
        {
          sub: 'Курс повышения квалификации',
          name: 'ПРАВО В НАЛОГОВОМ КОНСУЛЬТИРОВАНИИ: АКТУАЛИЗАЦИЯ НАВЫКОВ И ЗНАНИЙ',
          date: '20 сентября — 08 октября 2021',
          link: 'https://palata-nk.ru/events/kurs-povysheniya-kvalifikatsii/pravo-v-nalogovom-konsultirovanii-aktualizatsiya-navykov-i-znaniy/'
        
        },
        {
          sub: 'Практикум',
          name: 'АРЕНДА: что мы знаем и не знаем о самом распространенном виде сделки (правовые, бухгалтерские, налоговые аспекты)',
          date: '28-30 сентября 2021',
          link: 'https://palata-nk.ru/events/praktikumy/arenda-chto-my-znaem-i-ne-znaem-o-samoy-rasprostranennoy-forme-sdelki-pravovye-bukhgalterskie-nalogo/'
        
        },
      ],
      quest_org: [
        {
          text: "Текст ответа на вопрос",
          title: "Что такое аккредитация образовательной организции?",
        },
        { text: "Текст ответа на вопрос", title: "Как пройти аккредитацию?" },
        {
          text: "Текст ответа на вопрос",
          title: "Свидетельство об аккредитации",
        },
        { text: "Текст ответа на вопрос", title: "Какие нужны документы? " },
      ],
      quest_attested: [
        {
          text:
            "Повышение квалификации можно пройти в Палате налоговых консультантов или в одной из аккредитованных ПНК образовательных организаций. Формы повышения квалификации: Практикумы; Консультационные семинары; Налоговые видео-семинары; Зачет ситуаций; Психологические тренинги; Участие в проекте «Горячая линия»; Непрерывный курс в образовательной организации",
          title:
            "Заканчивается срок действия квалификационного аттестата, в какой форме можно пройти повышение квалификации?",
        },
        {
          text:
            "В течение 2 лет действия квалификационного аттестата налоговый консультант проходит повышение квалификации в объеме 72 ак. час.",
          title:
            "Сколько часов нужно для продления срока действия квалификационного аттестата?",
        },
        {
          text:
            "1.	Заявление поданное через личный кабинет <br>2.	Согласие на обработку персональных данных. <br>3.	Сканы удостоверения(й) подтверждающие 72ч. повышения квалификации. <br>4.	Подтверждение оплаты членских взносов за последние 3 года, включая текущий год",
          title:
            "Какие документы, необходимые для оформления свидетельства о продлении срока действия квалификационного аттестата ",
        },
        {
          text:
            "Да, можно. Если срок действия Вашего квалификационного аттестата истек более года назад, Вам необходимо: <br>1.	подать ходатайство о восстановлении квалификационного аттестата; <br>2.	к ходатайству приложить подтверждение оплаты задолженности по членским взносам за 3 календарных года, включая текущий; <br>3.	пройти повышение квалификации в объеме 72 ак. часов ",
          title:
            "Можно ли восстановить срок действия квалификационного аттестата?",
        },
        {
          text:
            "Закончился срок действия квалификационного аттестата или не оплачен членский взнос",
          title:
            "Не вижу себя в реестре аттестованных налоговых консультантов?",
        },
      ],
      quest_cons: [
        {
          text:
            "В зависимости от выбранной программы, необходимым условием допуска является наличие среднего профессионального (экономического/юридического) или высшего",
          title: "Требуется ли высшее образование для обучения?",
        },
        {
          text:
            "180, 260  или 260 аккадемических часов требуется для того, чтобы освоить программу",
          title: "Какое количество академических часов длится обучение?",
        },
        //   {text: 'Налоговый консультант - специалист оказывающий квалифицированное содействие налогоплательщикам (физическим и юридическим лицам) при исполнении налоговых обязанностей.  Для этого налоговый консультант должен обладать знаниями экономики, юриспруденции и собственно налогообложения. Требования к квалификации содержаться в Квалификационном справочнике. В настоящее время Союзом «ПНК» разработан и в декабре 2020 года внесён в Минтруд РФ проект профстандарта «Консультант по налогам и сборам». Деятельность налогового консультанта (консультанта по налогам и сборам) существенно отличается от деятельности представителей других профессий. Это легко увидеть ознакомившись с трудовыми функциями и действиями.' ,title: 'Кто такой налоговый консультант? Чем он отличается от юриста, бухгалтера, аудитора и т.п.?'},
        {
          text:
            "Обучение по программе Палаты налоговых консультантов проводят аккредитованные  образовательные организации.Обучение завершается обязательной сдачей итогового контроля знаний (экзамена). ",
          title: "Как проходит обучение?",
        },
      ],
    };
  },
  methods: {
      ...mapActions('app', ['GET_LECTORS']),
      lector_background(url){
        return `background-image: url(${url})`
    },
    page(page) {
      location.href = page;
    },
    get_lectors(){
        this.GET_LECTORS()
    },
    change_tragectory(val){
      this.started=true;
      this.tragectory_individual = val;
    },
    expand(block){
      this.block_expand[block] = !this.block_expand[block] 
    }
  },
  created() {
    AOS.init();
    this.get_lectors()
  },
  components: {CookieConsent},
  computed: {
    ...mapState('app', ['lectors']),
    lectors_short(){
      return this.lectors.slice(1, 19)
    },
    tragectory1(){
      if (!this.started){
        return {
          class: 'rounded-lg  mt-5 inactive-my height-300',
        }
      }
      if(this.tragectory_individual){
        
        return {
          class: 'rounded-lg shadow mt-5 bg-image-1 height-300',
        }
      }
      else{
        return {
          class: 'rounded-lg mt-5 muted-inactive-my height-300',
        }
      }
      
    },
    tragectory2(){
      if (!this.started){
        return {
          class: 'rounded-lg  mt-5 inactive-my height-300',
        }
      }
      if(!this.tragectory_individual  ){
        return {
          class: 'rounded-lg shadow mt-5 bg-image-2 height-300',
        }
        
      }
      else{
        return {
          class: 'rounded-lg  mt-5 muted-inactive-my height-300',
        }
        
      }
      
    }
  },
};
</script>