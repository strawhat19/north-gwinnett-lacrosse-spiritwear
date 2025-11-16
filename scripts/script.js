let maxDecimals = 2;
let useTabButtons = true;
let activeTab = `Spiritwear`;
let businessEmail = `nghslaxbooster@gmail.com`;
let sizes = [`Small`, `Medium`, `Large`, `X Large`, `XX Large`, `XXX Large`];
let placeholderImageURL = `https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f`;
let isDev = (window.location.href.includes(`index`) || window.location.href.includes(`:5500`));
let githubPhotosURL = `https://raw.githubusercontent.com/strawhat19/north-gwinnett-lacrosse-spiritwear/refs/heads/main`;
let placeholderImageURL_nghs = `https://5starassets.blob.core.windows.net/athleticsites/2527115/833/images/98447016-4fe3-48c4-9150-a91b861c821a.png`;
let photosURL = isDev ? `` : githubPhotosURL;
let aiBadge = `${photosURL}/assets/ai-generated/ai-badge.svg`;
let shopURL = isDev ? `` : `https://www.nghsbulldogsathletics.com/lacrosse-spiritwear`;
let navTabs = [{ url: `#`, name: activeTab }, /* { url: `#`, name: `Sponsorship` } */]?.map((nt, nti) => ({ ...nt, id: nti + 1, }));

let colorsObj = {black: `Black`, red: `Red`, grey: `Grey`, white: `White`};
let colorsLC = Object.keys(colorsObj);
let colors = [`Black`, `Red`, `Grey`, `White`];
let redFirstColors = [`Red`, `Black`, `Grey`, `White`];

function onNavTabClick(e) {
    let ntName = e?.target?.title;
    if (ntName?.toLowerCase() != activeTab?.toLowerCase()) {
        activeTab = ntName;
        setNavTabs();
        setProducts();
    }
}

function appendNavTab(navTab, container) {
    let navTabHTML = `
        <a  
            title="${navTab?.name}" 
            id="navtab_${navTab?.id}" 
            onclick="onNavTabClick(event)"
            class="navTabLink cursorPointer hoverLink ${navTab?.name == activeTab ? `activeTabLink` : ``}"
        >
            ${navTab?.name}
        </a>
    `;
    container.insertAdjacentHTML(`beforeend`, navTabHTML);
}

function setNavTabs() {
    if (spiritwear_nav) {
        spiritwear_nav.innerHTML = ``;
        for (let i = 0; i < navTabs.length; i++) {
            let navTb = navTabs[i];
            if (navTb) {
                appendNavTab(navTb, spiritwear_nav);
            }
        }
    }
}

let products = [
    {
        sizes,
        url: `#`,
        type: ``,
        ai: false,
        types: [],
        size: sizes[0],
        price: `28.00`,
        featured: false,
        usePlaceholder: false,
        hasColorOptions: false,
        colors: redFirstColors,
        color: redFirstColors[0],
        id: `NGHS_Under_Armour_T_Shirt`,
        name: `NGHS Under Armour T-Shirt`,
        imageURLs: [`${photosURL}/assets/official/nghs_ua_shirt_red.png`],
    },
    {
        sizes,
        url: `#`,
        type: ``,
        ai: false,
        types: [],
        size: sizes[0],
        price: `42.00`,
        featured: false,
        usePlaceholder: false,
        hasColorOptions: true,
        color: colorsObj.black,
        id: `NGHS_Under_Armour_Hoodie`,
        name: `NGHS Under Armour Hoodie`,
        colors: [colorsObj.black, colorsObj.red],
        imageURLs: [`${photosURL}/assets/official/nghs_ua_sweatshirt_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `16.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        id: `Lacrosse_NGHS_T_Shirt`,
        name: `Lacrosse NGHS Shirt`,
        image: `lacrosse_northgwinnett`,
        types: [`T-Shirt`, `Sleeveless`],
        imageURLs: [`${photosURL}/assets/official/lacrosse_northgwinnett_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `16.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        image: `lacrosssestick_vertical`,
        types: [`T-Shirt`, `Sleeveless`],
        id: `Lacrosse_Vertical_Stick_T_Shirt`,
        name: `Lacrosse Vertical Stick Shirt`,
        imageURLs: [`${photosURL}/assets/official/lacrosssestick_vertical_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `16.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        image: `northgwinnett_black_bar`,
        types: [`T-Shirt`, `Sleeveless`],
        id: `Lacrosse_NGHS_Black_Bar_T_Shirt`,
        name: `Lacrosse NGHS Black Bar Shirt`,
        imageURLs: [`${photosURL}/assets/official/northgwinnett_black_bar_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `16.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        id: `Lacrosse_Sticks_T_Shirt`,
        name: `Lacrosse Sticks Shirt`,
        image: `lacrosse_sticks_shirt`,
        types: [`T-Shirt`, `Sleeveless`],
        imageURLs: [`${photosURL}/assets/official/lacrosse_sticks_shirt_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `16.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        image: `NG_bulldogs`,
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        types: [`T-Shirt`, `Sleeveless`],
        id: `Lacrosse_NGHS_Bulldogs_T_Shirt`,
        name: `Lacrosse NGHS Bulldogs Shirt`,
        imageURLs: [`${photosURL}/assets/official/NG_bulldogs_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: true,
        type: ``,
        types: [],
        size: sizes[0],
        price: `16.00`,
        featured: false,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: false,
        id: `Lacrosse_Tank_Top`,
        name: `Lacrosse Tank Top`,
        imageURLs: [`${photosURL}/assets/samples/lacrosse_tank_top_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: true,
        type: ``,
        types: [],
        size: sizes[0],
        price: `25.00`,
        featured: false,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: false,
        id: `Lacrosse_Crewneck_Sweatshirt`,
        name: `Lacrosse Crewneck Sweatshirt`,
        imageURLs: [`${photosURL}/assets/samples/lacrosse_crewneck_sweatshirt_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: true,
        type: ``,
        types: [],
        size: sizes[0],
        price: `30.00`,
        featured: false,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: false,
        id: `Lacrosse_Hoodie_Sweatshirt`,
        name: `Lacrosse Hoodie Sweatshirt`,
        imageURLs: [`${photosURL}/assets/samples/lacrosse_hoodie_sweatshirt_black.png`],
    },
    // {
    //     sizes,
    //     colors,
    //     url: `#`,
    //     ai: true,
    //     type: ``,
    //     types: [],
    //     size: sizes[0],
    //     price: `40.00`,
    //     featured: false,
    //     color: colors[0],
    //     usePlaceholder: false,
    //     hasColorOptions: false,
    //     id: `Lacrosse_Jacket_W_Embroidery`,
    //     name: `Lacrosse Jacket w/ Embroidery`,
    //     imageURLs: [`${photosURL}/assets/samples/lacrosse_jacket_w_embroidery_g_black.png`],
    // },
    {
        sizes,
        colors,
        url: `#`,
        ai: true,
        type: ``,
        types: [],
        size: sizes[0],
        price: `100.00`,
        featured: false,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: false,
        id: `Lacrosse_Team_Rain_Jacket`,
        name: `Lacrosse Team Rain Jacket`,
        imageURLs: [`${photosURL}/assets/samples/lacrosse_team_rain_jacket_black.png`],
    },
    // {
    //     sizes,
    //     colors,
    //     url: `#`,
    //     type: ``,
    //     types: [],
    //     ai: false,
    //     size: sizes[0],
    //     featured: false,
    //     color: colors[0],
    //     usePlaceholder: false,
    //     hasColorOptions: false,
    //     price: `108.00 - $116.00`,
    //     id: `NGHS_Lacrosse_Team_Jacket`,
    //     name: `NGHS Lacrosse Team Jacket`,
    //     imageURLs: [`${photosURL}/assets/opt/lacrosse_team_jacket.png`],
    // },
    {
        sizes,
        url: `#`,
        type: ``,
        ai: false,
        types: [],
        size: sizes[0],
        price: `60.00`,
        featured: false,
        usePlaceholder: false,
        colors: redFirstColors,
        hasColorOptions: false,
        color: redFirstColors[0],
        id: `Girls_Lacrosse_Team_Bag`,
        name: `Girls Lacrosse Team Bag`,
        imageURLs: [`https://5starassets.blob.core.windows.net/multi-media/2527115/hub/backpack.png`],
    },
]?.map((p, pi) => ({ 
    ...p, 
    id: p?.id ? p?.id : pi + 1, 
    name: p?.name?.includes(`Sample`) ? `Sample Product ${pi + 1}` : p?.name, 
    extraClasses: p?.imageURLs?.includes(placeholderImageURL) ? `sample` : (p?.extraClasses ? p?.extraClasses : `productComponentClass`),
}));

let storedProducts = getStorage(`products`);
products = Array.isArray(storedProducts) && storedProducts.length > 0 ? storedProducts : products;

function onColorChange(productImageURL, optionValueLC, productImageElement) {
    let [productImageNoExtension] = productImageURL?.split(`.png`);
    let productImageURLParts = productImageNoExtension?.split(`_`);
    let currentImageColorImage = [...productImageURLParts]?.find(c => colorsLC?.includes(c));
    let newImageURL = productImageURL?.replaceAll(currentImageColorImage, optionValueLC);
    let [currentImageColor] = currentImageColorImage.split(`.`);
    if (optionValueLC?.toLowerCase() != currentImageColor?.toLowerCase()) {
        productImageElement.src = newImageURL;
    }
}

function onTypeChange(product, productElement, optionValue, optionValueLC, productImageURL, productImageElement) {
    if (product?.types?.length > 1) {
        if (productElement) {
            let productElementClasses = productElement?.className;
            let shouldSwitch = !productElementClasses?.includes(optionValue);
            if (shouldSwitch) {
                let newClassName = productElement?.className?.replaceAll(
                    /\b[A-Z][a-zA-Z0-9_-]*\b/g, 
                    optionValue
                );
                let newImageURL = productImageURL;
                let [imgURL] = productImageURL?.split(`.png`);
                if (optionValueLC == `sleeveless`) {
                    let sleevelessURL = imgURL?.includes(optionValueLC) ? imgURL : imgURL + `_${optionValueLC}.png`;
                    newImageURL = sleevelessURL;
                } else {
                    let shirtURL = imgURL?.replaceAll(`_sleeveless`, ``) + `.png`;
                    newImageURL = shirtURL;
                }
                product.imageURLs[0] = newImageURL;
                product.extraClasses = optionValue;
                productImageElement.src = newImageURL;
                productElement.className = newClassName;
            }
        }
    }
}

function onShirtFormInput(e) {
    let trgt = e?.target;
    let optionValue = trgt?.value;
    let optionValueLC = optionValue?.toLowerCase();
    let isTypeSelector = trgt?.className?.includes(`typeSelector`);
    let isColorSelector = trgt?.className?.includes(`colorSelector`);

    if (!isColorSelector && !isTypeSelector) return;

    let productID = trgt?.id?.replaceAll(`_${isColorSelector ? `options` : `types`}_dropdown`, ``);
    if (productID) {
        let product = products.find(p => p?.id == productID);
        if (product) {
            if (product?.hasColorOptions) {
                let productElement = document.querySelector(`#product_${productID}`);
                let productImageElement = document.querySelector(`#productImage_${productID}`);
                if (productImageElement) {
                    let productImageURL = productImageElement?.src;
                    if (isColorSelector) {
                        onColorChange(productImageURL, optionValueLC, productImageElement);
                    } else {
                        onTypeChange(product, productElement, optionValue, optionValueLC, productImageURL, productImageElement);
                    }
                }
            }
        }
    }
}

function extractCaps(str, size = false) {
    let caps = (str.match(/[A-Z]/g) || []).join(``);
    if (size) {
        caps = caps?.replaceAll(`XXX`, `3X`)?.replaceAll(`XX`, `2X`);
    }
    return caps;
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function setProductParam(e) {
    e?.preventDefault();
    let key = ``;
    let trgt = e?.target;
    let { id, value, className } = trgt;

    let isSizeSelector = className?.includes(`size`);
    let isTypeSelector = className?.includes(`type`);

    if (isSizeSelector) {
        key = `size`;
    } else if (isTypeSelector) {
        key = `type`;
    }

    let [productID, ] = id?.split(`_${key}_button_`);
    let product = products?.find(p => p?.id == productID);
    if (product) {
        let productSelectorValue = document.querySelector(`#${productID}_${key}s_value`);
        if (productSelectorValue) {
            let productSelector = document.querySelector(`#${productID}_${key}s_selector`);
            if (productSelector) {
                let productButtons = productSelector?.querySelectorAll(`button`);

                productButtons.forEach(btn => {
                    if (btn?.id != id) {
                        btn.className = btn?.className?.replaceAll(`activeTabButton`, ``);
                    } else {
                        btn.className = btn?.className + ` activeTabButton`;
                    }
                });

                product[key] = value;
                productSelectorValue.value = value;
                
                let productElement = document.querySelector(`#product_${productID}`);
                let productImageElement = document.querySelector(`#productImage_${productID}`);
                if (productImageElement) {
                    let productImageURL = productImageElement?.src;
                    if (isTypeSelector) {
                        onTypeChange(product, productElement, value, value?.toLowerCase(), productImageURL, productImageElement);
                    }
                }

                setStorage(`products`, products);
            }
        }
    }
}

function getProduct(productID) {
    return products?.find(p => p?.id == productID);
}

const sizeComponents = {
    dropdown: (productID, szes = sizes) => `
        <input type="hidden" name="on0" value="Size" />
        <select name="os0" id="${productID}_sizes_dropdown" class="sizeSelector cursorPointer">
            ${szes?.map(s => (`
                <option value="${s}">
                    ${s}
                </option>
            `))}
        </select>    
    `,
    tabs: (productID, szes = sizes) => `
        <input type="hidden" name="on0" value="Size" />
        <input id="${productID}_sizes_value" type="hidden" name="os0" value="${getProduct(productID)?.size}" />
        <div id="${productID}_sizes_selector" class="sizeSelector cursorPointer selectorTabs">
            ${szes?.map((s) => (`<button 
                value="${s}" 
                onclick="setProductParam(event)"
                id="${productID}_size_button_${extractCaps(s, true)}" 
                class="tabButton sizeButton ${s == getProduct(productID)?.size ? `activeTabButton` : `inactiveTabButton`}" 
            >
                ${extractCaps(s, true)}
            </button>`)).join(``)}
        </div>    
    `,
};

const typeComponents = {
    dropdown: (productID, typs) => `
        <input type="hidden" name="on2" value="Type" />
        <select name="os2" id="${productID}_types_dropdown" class="typeSelector cursorPointer">
            ${typs?.map(t => (`
                <option value="${t}">
                    ${t}
                </option>    
            `))}
        </select>
    `,
    tabs: (productID, typs) => `
        <input type="hidden" name="on2" value="Type" />
        <input id="${productID}_types_value" type="hidden" name="os2" value="${getProduct(productID)?.type}" />
        <div id="${productID}_types_selector" class="typeSelector cursorPointer selectorTabs">
            ${typs?.map((t) => (`<button 
                value="${t}" 
                onclick="setProductParam(event)"
                id="${productID}_type_button_${t}" 
                class="tabButton typeButton ${t == getProduct(productID)?.type ? `activeTabButton` : `inactiveTabButton`}" 
            >
                ${t}
            </button>`)).join(``)}
        </div>
    `,
}

function generateTShirtForm(productID, paypalFormID, showSizeSelector = true) {
    let product = products.find(p => p?.id == productID);

    let formHTML = `
        <form class="paypalFormID_${paypalFormID}" oninput="onShirtFormInput(event)" id="${productID}_productForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">

           ${product?.types?.length > 1 ? (useTabButtons 
                ? typeComponents.tabs(productID, product?.types) 
                : typeComponents.dropdown(productID, product?.types)
            ) : ``}

            <div class="formFieldsContainer ${showSizeSelector ? `showSizeSelector` : `noSizeSelector`}">
                ${showSizeSelector ? (useTabButtons 
                    ? sizeComponents.tabs(productID, product?.sizes) 
                    : sizeComponents.dropdown(productID, product?.sizes)
                ) : ``}

                <input type="hidden" name="on1" value="Color" />
                <select name="os1" id="${productID}_options_dropdown" class="colorSelector cursorPointer">
                    ${product?.colors?.map(c => (`
                        <option value="${c}">
                            ${c}
                        </option>    
                    `))}
                </select>
            </div>

            <input type="hidden" name="cmd" value="_cart" />

            <input type="hidden" name="add" value="1">
            <input type="hidden" name="business" value="${businessEmail}" />
            <input type="hidden" name="item_name" value="${product?.name}" />
            <input type="hidden" name="amount" value="${product?.price}" />

            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="shopping_url" value="${shopURL}" />
            <input type="hidden" name="return" value="${shopURL}?paid=1" />
            <input type="hidden" name="cancel_return" value="${shopURL}?canceled=1" />
            <input type="hidden" name="cbt" value="Back to ${activeTab}" />

            <button class="addToCartButton" alt="Add to Cart">
                <img class="paypalBadge" src="${photosURL}/assets/graphics/paypal-badge-5.png" alt="Paypal Badge" />
                <i>Add to Cart - $${numberFormatWithCommas(product?.price) ?? `0${maxDecimals > 0 ? `.00` : ``}`}</i>
            </button>
        </form> 
    `;       

    return formHTML;
}

let productForms = {
    Lacrosse_Tank_Top: generateTShirtForm(`Lacrosse_Tank_Top`, `DELKC6W9DUWH6`),
    Lacrosse_NGHS_T_Shirt: generateTShirtForm(`Lacrosse_NGHS_T_Shirt`, `5ZMCU8LKWQ6QE`),
    Lacrosse_Sticks_T_Shirt: generateTShirtForm(`Lacrosse_Sticks_T_Shirt`, `BABPTQN2BPLN4`),
    NGHS_Under_Armour_Hoodie: generateTShirtForm(`NGHS_Under_Armour_Hoodie`, `U76A39SMN9TJG`),
    NGHS_Under_Armour_T_Shirt: generateTShirtForm(`NGHS_Under_Armour_T_Shirt`, `3WEMBUCAFNWX6`),
    Lacrosse_Team_Rain_Jacket: generateTShirtForm(`Lacrosse_Team_Rain_Jacket`, `RW2RLGPSK2ZJY`),
    Lacrosse_Hoodie_Sweatshirt: generateTShirtForm(`Lacrosse_Hoodie_Sweatshirt`, `SCKAVCMJRF6QS`),
    Girls_Lacrosse_Team_Bag: generateTShirtForm(`Girls_Lacrosse_Team_Bag`, `URVER46QE8EZ8`, false),
    Lacrosse_Crewneck_Sweatshirt: generateTShirtForm(`Lacrosse_Crewneck_Sweatshirt`, `QASEY2RFG8QZ4`),
    Lacrosse_Jacket_W_Embroidery: generateTShirtForm(`Lacrosse_Jacket_W_Embroidery`, `PBP42NHJDZXGL`),
    Lacrosse_NGHS_Bulldogs_T_Shirt: generateTShirtForm(`Lacrosse_NGHS_Bulldogs_T_Shirt`, `9USFGBC9UL4H2`),
    Lacrosse_Vertical_Stick_T_Shirt: generateTShirtForm(`Lacrosse_Vertical_Stick_T_Shirt`, `FY3UDUG6XYZV6`),
    Lacrosse_NGHS_Black_Bar_T_Shirt: generateTShirtForm(`Lacrosse_NGHS_Black_Bar_T_Shirt`, `5KBV7BR3UFLBW`),
}

function setProductForm(productID) {
    let productForm = productForms[productID];
    if (productForm) {
        let container = document.querySelector(`#paypal-button-container-${productID}`);
        if (container) {
            container.innerHTML = ``;
            container.insertAdjacentHTML(`afterend`, productForm);
        }
    }
}

function numberFormatWithCommas(numberValue, decimalPlaces = maxDecimals) {
    let numberFormatted = numberValue; 
    let parsedNumber = typeof numberValue == `string` ? parseFloat(numberValue) : numberValue;
    let validNumber = !isNaN(parsedNumber);
    if (validNumber) {
        let stringNum = parsedNumber?.toLocaleString(`en-US`);
        let parsedFloat = decimalPlaces > 0 ? parsedNumber?.toFixed(decimalPlaces) : parsedNumber;
        numberFormatted = parsedNumber > 999 ? stringNum?.includes(`.`) ? stringNum : (stringNum + (decimalPlaces > 0 ? `.00` : ``)) : parsedFloat;
    }
    return numberFormatted;
}

function appendProduct(product, container) {
    let productComponentHTML = `
        <div id="product_${product?.id}" title="${product?.name}" class="product ${product?.featured ? `featured` : ``} ${product?.extraClasses != `` ? product?.extraClasses : ``}">
            <a class="productLink">
                <img id="productImage_${product?.id}" class="productImage" src="${product?.usePlaceholder ? placeholderImageURL_nghs : product?.imageURLs[0]}" alt="${product?.name}" />
                ${product?.ai ? `<img class="aiBadge" src="${aiBadge}" alt="${product?.name} AI" />` : ``}
                <div class="productDetails">
                    <h3 class="productName ${product?.featured ? `featuredName` : `standardProductName`}">
                        ${product?.name}
                    </h3>
                    <div id="paypal-button-container-${product?.id}" class="paypalFieldsContainer productPrice">
                        <p>$${product?.price?.includes(`-`) ? product?.price : numberFormatWithCommas(product?.price) ?? `0${maxDecimals > 0 ? `.00` : ``}`}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
    container.insertAdjacentHTML(`beforeend`, productComponentHTML);
}

function getStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.log(`Invalid JSON in localStorage for key "${key}"`);
        return null;
    }
}

function setProducts() {
    if (productsSection) {
        if (activeTab == `Spiritwear`) {
            if (!window.location.href.includes(`/edit`)) {
                productsSection.innerHTML = ``;
                for (let i = 0; i < products.length; i++) {
                    let prod = products[i];
                    if (prod) {
                        appendProduct(prod, productsSection);
                        setProductForm(prod?.id);
                    }
                }
            }
        } else {
            productsSection.innerHTML = ``;
            productsSection.innerHTML = `
                <div class="product productLoading">
                    <i>Sponsorship Tab</i>
                </div>
            `;
        }
    }
}

function setFooterDynamicCopyrightYear() {
    if (spiritwear_footer_copyright_year) {
        spiritwear_footer_copyright_year.innerHTML = new Date().getFullYear();
    }
}

function detectPlatform() {
    const width = window.innerWidth;
    const ua = navigator.userAgent.toLowerCase();

    const pwa =
        (window.matchMedia(`(display-mode: standalone)`).matches) ||
        (window.navigator.standalone === true);

    const mobile = /iphone|ipod|android.*mobile|windows phone|blackberry|bb10/.test(ua);
    const tablet = /ipad|android(?!.*mobile)|tablet/.test(ua);

    const smallScreen = width <= 768;
    const mediumScreen = width > 768 && width <= 1024;

    let defDevice = `Desktop_Laptop`;
    let device = defDevice;

    if (pwa) {
        device = `PWA`;
    } else if (mobile || smallScreen) {
        device = `Mobile`;
    } else if (tablet || mediumScreen) {
        device = `Tablet`;
    } else {
        device = defDevice;
    }

    let browser = `Unknown`;
    if (/edg\//.test(ua)) {
        browser = `Edge`;
    } else if (/opr\//.test(ua) || /opera/.test(ua)) {
        browser = `Opera`;
    } else if (/chrome\//.test(ua)) {
        browser = `Chrome`;
    } else if (/safari\//.test(ua) && !/chrome\//.test(ua)) {
        browser = `Safari`;
    } else if (/firefox\//.test(ua)) {
        browser = `Firefox`;
    } else if (/msie|trident\//.test(ua)) {
        browser = `Internet_Explorer`;
    }

    let rtn_obj = {
        pwa,
        device,
        mobile,
        tablet,
        browser,
        smallScreen,
        mediumScreen,
    }

    return rtn_obj;
}

function addPlatformParameters() {
    if (spiritwear_main) {
        let platform = detectPlatform();
        if (platform) {
            let xsDevice = platform?.pwa || platform?.mobile || platform?.smallScreen;
            spiritwear_main.className += ` ` + (xsDevice ? `xsDevice` : `_Device`);
            console.log(`Platform`, {platform, spiritwear_main});
        }
    }
}

setProducts();
setNavTabs();
setFooterDynamicCopyrightYear();
// addPlatformParameters();