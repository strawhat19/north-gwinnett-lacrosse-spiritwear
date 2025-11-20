let maxDecimals = 2;
let activeTab = `Spiritwear`;
let businessEmail = `nghslaxbooster@gmail.com`;
let sizes = [`Small`, `Medium`, `Large`, `X Large`, `XX Large`, `XXX Large`];
let isDev = window.location.href.includes(`index`) || window.location.href.includes(`:5500`);

let placeholderImageURL = `https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f`;
let githubPhotosURL = `https://raw.githubusercontent.com/strawhat19/north-gwinnett-lacrosse-spiritwear/refs/heads/main`;
let placeholderImgURL = `https://5starassets.blob.core.windows.net/athleticsites/2527115/833/images/98447016-4fe3-48c4-9150-a91b861c821a.png`;

let photosURL = isDev ? `` : githubPhotosURL;
let useTabButtons = false;
let hideOnDisabled = true;
let aiBadge = `${photosURL}/assets/ai-generated/ai-badge.svg`;
let shopURL = isDev ? `` : `https://www.nghsbulldogsathletics.com/lacrosse-spiritwear`;

let navTabs = [{ url: `#`, name: activeTab }, /* { url: `#`, name: `Sponsorship` } */]?.map((nt, nti) => ({ ...nt, id: nti + 1, }));

let colorsObj = {black: `Black`, red: `Red`, grey: `Grey`, white: `White`};
let colorsLC = Object.keys(colorsObj);
let colors = [`Black`, `Red`, `Grey`, `White`];
let redFirstColors = [`Red`, `Black`, `Grey`, `White`];

let types = [`T-Shirt`, `Sleeveless`, `Crewneck`, `Hoodie`];

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

let deprecatedProducts = [
    {
        sizes,
        colors,
        url: `#`,
        ai: true,
        type: ``,
        types: [],
        size: sizes[0],
        price: `18.00`,
        featured: false,
        color: colors[0],
        basePrice: `18.00`,
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
        price: `40.00`,
        featured: false,
        color: colors[0],
        basePrice: `40.00`,
        usePlaceholder: false,
        hasColorOptions: false,
        id: `Lacrosse_Jacket_W_Embroidery`,
        name: `Lacrosse Jacket w/ Embroidery`,
        imageURLs: [`${photosURL}/assets/samples/lacrosse_jacket_w_embroidery_g_black.png`],
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
        basePrice: `25.00`,
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
        basePrice: `30.00`,
        usePlaceholder: false,
        hasColorOptions: false,
        id: `Lacrosse_Hoodie_Sweatshirt`,
        name: `Lacrosse Hoodie Sweatshirt`,
        imageURLs: [`${photosURL}/assets/samples/lacrosse_hoodie_sweatshirt_black.png`],
    },
    {
        sizes,
        url: `#`,
        type: ``,
        ai: false,
        types: [],
        size: sizes[0],
        price: `75.00`,
        featured: false,
        basePrice: `75.00`,
        usePlaceholder: false,
        hasColorOptions: true,
        color: colorsObj.black,
        id: `NGHS_Under_Armour_Hoodie`,
        name: `NGHS Under Armour Hoodie`,
        colors: [colorsObj.black, colorsObj.red],
        imageURLs: [`${photosURL}/assets/official/nghs_ua_sweatshirt_black.png`],
    },
]

let oldProducts = [
    {
        sizes,
        colors,
        url: `#`,
        type: ``,
        types: [],
        ai: false,
        size: sizes[0],
        featured: false,
        color: colors[0],
        usePlaceholder: false,
        hasColorOptions: false,
        price: `108.00 - $116.00`,
        basePrice: `108.00 - $116.00`,
        id: `NGHS_Lacrosse_Team_Jacket`,
        name: `NGHS Lacrosse Team Jacket`,
        imageURLs: [`${photosURL}/assets/opt/lacrosse_team_jacket.png`],
    },
]

let products = [
    {
        sizes,
        types,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `18.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        basePrice: `18.00`,
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        id: `Lacrosse_NGHS_T_Shirt`,
        name: `Lacrosse NGHS T-Shirt`,
        image: `lacrosse_northgwinnett`,
        imageURLs: [`${photosURL}/assets/official/lacrosse_northgwinnett_black.png`],
    },
    {
        sizes,
        colors,
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `18.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        basePrice: `18.00`,
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
        price: `18.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        basePrice: `18.00`,
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
        price: `18.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        basePrice: `18.00`,
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
        price: `18.00`,
        featured: false,
        type: `T-Shirt`,
        color: colors[0],
        basePrice: `18.00`,
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
        url: `#`,
        ai: false,
        size: sizes[0],
        price: `35.00`,
        type: `T-Shirt`,
        featured: false,
        color: colors[0],
        basePrice: `35.00`,
        usePlaceholder: false,
        hasColorOptions: true,
        extraClasses: `T-Shirt`,
        id: `NGHS_Under_Armour_T_Shirt`,
        name: `NGHS Under Armour T-Shirt`,
        colors: [colorsObj.black, colorsObj.red],
        types: [`T-Shirt`, `Sleeveless`, `Hoodie`],
        imageURLs: [`${photosURL}/assets/official/NG_ua_bulldogs_black.png`],
    },
    {
        sizes,
        url: `#`,
        ai: false,
        type: ``,
        types: [],
        size: sizes[0],
        price: `42.00`,
        featured: false,
        basePrice: `42.00`,
        name: `Rain Jacket`,
        usePlaceholder: false,
        color: colorsObj.black,
        hasColorOptions: false,
        colors: [colorsObj.black],
        id: `Lacrosse_Team_Rain_Jacket`,
        imageURLs: [
            `${photosURL}/assets/official/models/NGHS_Rain_Jacket_w_Model.png`, 
            // `${photosURL}/assets/samples/lacrosse_team_rain_jacket_black.png`,
        ],
    },
    {
        url: `#`,
        type: ``,
        ai: false,
        types: [],
        size: sizes[0],
        price: `80.00`,
        featured: false,
        sizes: [sizes[0]],
        basePrice: `80.00`,
        color: colorsObj.red,
        usePlaceholder: false,
        hasColorOptions: false,
        colors: [colorsObj.red],
        id: `Girls_Lacrosse_Team_Bag`,
        name: `Girls Lacrosse Team Bag`,
        imageURLs: [`https://5starassets.blob.core.windows.net/multi-media/2527115/hub/backpack.png`],
    },
    // ...oldProducts,
    // ...deprecatedProducts,
]?.map((p, pi) => ({ 
    ...p, 
    id: p?.id ? p?.id : pi + 1, 
    name: p?.name?.includes(`Sample`) ? `Sample Product ${pi + 1}` : p?.name, 
    extraClasses: p?.imageURLs?.includes(placeholderImageURL) ? `sample` : (p?.extraClasses ? p?.extraClasses : `productComponentClass`),
}));

let storedProducts = getStorage(`products`);
if (useTabButtons && (Array.isArray(storedProducts) && storedProducts.length > 0)) {
    products = storedProducts;
}

const getProduct = (productID) => products?.find(p => p?.id == productID);

function onColorChange(product, productImageURL, optionValue, optionValueLC, productImageElement) {
    let [baseURL] = productImageURL.split(`.png`);
    let parts = baseURL.split(`_`);
    let matchedColors = parts.filter(p => colorsLC.includes(p.toLowerCase()));
    if (matchedColors.length === 0) return;
    let lastColor = matchedColors[matchedColors.length - 1];
    let lastIndex = parts.lastIndexOf(lastColor);
    parts[lastIndex] = optionValueLC;
    let newImageURL = parts.join(`_`) + `.png`;
    if (optionValueLC.toLowerCase() !== lastColor.toLowerCase()) {
        productImageElement.src = newImageURL;
    }
    product.color = optionValue;
    setProductForm(product?.id);
}

function onTypeChange(product, productElement, optionValue, optionValueLC, productImageURL, productImageElement) {
    if (product?.types?.length > 1) {
        if (productElement) {
            let pType = product?.type;
            let pTypeLC = pType.toLowerCase();
            let productElementClasses = productElement?.className;
            let pNameField = productElement?.querySelector(`.productName`);
            let shouldSwitch = !productElementClasses?.includes(optionValue);
            if (shouldSwitch || optionValueLC != pTypeLC) {
                let newClassName = productElement?.className?.replaceAll(
                    /\b[A-Z][a-zA-Z0-9_-]*\b/g, 
                    optionValue
                );
                let ext = `.png`;
                let newImageURL = productImageURL;
                let [imgURL] = productImageURL?.split(ext);
                let base = imgURL?.replaceAll(`_${pTypeLC}`, ``);
                let baseURL = base + ext;
                let baseTypeURL = base + `_${optionValueLC}` + ext;
                if (optionValueLC == `t-shirt`) {
                    newImageURL = baseURL;
                } else {
                    newImageURL = baseTypeURL;
                }
                product.type = optionValue;
                product.imageURLs[0] = newImageURL;
                product.extraClasses = optionValue;
                productImageElement.src = newImageURL;
                productElement.className = newClassName;
                let isUA = base?.includes(`_ua_`);
                if (optionValueLC == `crewneck`) {
                    product.price = isUA ? `50.00` : `25.00`;
                } else if (optionValueLC == `hoodie`) {
                    product.price = isUA ? `75.00` : `30.00`;
                } else {
                    product.price = product.basePrice;
                }
                product.name = product.name.replaceAll(pType, optionValue);
                if (pNameField) {
                    pNameField.innerHTML = product.name;
                }
                setProductForm(product?.id);
            }
        }
    }
}

function onShirtFormInput(e) {
    let trgt = e?.target;
    let optionValue = trgt?.value;
    let optionValueLC = optionValue?.toLowerCase();
    let isSizeSelector = trgt?.className?.includes(`sizeSelector`);
    let isTypeSelector = trgt?.className?.includes(`typeSelector`);
    let isColorSelector = trgt?.className?.includes(`colorSelector`);

    if (isSizeSelector) {
        let productID = trgt?.id?.replaceAll(`_sizes_dropdown`, ``);
        if (productID) {
            let product = getProduct(productID);
            if (product) {
                product.size = optionValue;
                setProductForm(product?.id);
            }
        }
        return;
    }

    if (!isColorSelector && !isTypeSelector) return;

    let productID = trgt?.id?.replaceAll(`_${isColorSelector ? `options` : `types`}_dropdown`, ``);
    if (productID) {
        let product = getProduct(productID);
        if (product) {
            if (product?.hasColorOptions) {
                let productElement = document.querySelector(`#product_${productID}`);
                let productImageElement = document.querySelector(`#productImage_${productID}`);
                if (productImageElement) {
                    let productImageURL = productImageElement?.src;
                    if (isColorSelector) {
                        onColorChange(product, productImageURL, optionValue, optionValueLC, productImageElement);
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
    if (useTabButtons) {
        localStorage.setItem(key, JSON.stringify(value));
    }
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
    let product = getProduct(productID);
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

const sizeComponents = {
    dropdown: (productID, szes = sizes) => {
        let prd = getProduct(productID);
        let pS = prd?.size;
        if (szes && Array.isArray(szes) && szes?.length > 0) {
            let fSz = szes?.filter(s => s != pS);
            szes = [pS, ...fSz];
        }
        let html = `
            <input type="hidden" name="on0" value="Size" />
            <select name="os0" id="${productID}_sizes_dropdown" class="sizeSelector cursorPointer">
                ${szes?.map(s => (`
                    <option value="${s}" class="sizeOption ${s == pS ? `activeOption` : ``}">
                        ${s}
                    </option>
                `))}
            </select>    
        `;
        return html;
    },
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
    dropdown: (productID, typs) => {
        let prd = getProduct(productID);
        let tTyp = prd?.type;
        let fTyps = typs?.filter(t => t != tTyp);
        typs = [tTyp, ...fTyps];
        let html = `
            <input type="hidden" name="on2" value="Type" />
            <select name="os2" id="${productID}_types_dropdown" class="typeSelector cursorPointer">
                ${typs?.map(t => (`
                    <option value="${t}" class="typeOption ${t == tTyp ? `activeOption` : ``}">
                        ${t}
                    </option>    
                `))}
            </select>
        `;
        return html;
    },
    tabs: (productID, typs) => {
        let prd = getProduct(productID);
        let tTyp = prd?.type;
        let fTyps = typs?.filter(t => t != tTyp);
        typs = [tTyp, ...fTyps];
        let html = `
            <input type="hidden" name="on2" value="Type" />
            <input id="${productID}_types_value" type="hidden" name="os2" value="${prd?.type}" />
            <div id="${productID}_types_selector" class="typeSelector cursorPointer selectorTabs">
                ${typs?.map((t) => (`<button 
                    value="${t}" 
                    onclick="setProductParam(event)"
                    id="${productID}_type_button_${t}" 
                    class="tabButton typeButton ${t == prd?.type ? `activeTabButton` : `inactiveTabButton`}" 
                >
                    ${t}
                </button>`)).join(``)}
            </div>
        `;
        return html;
    },
}

const colorComponents = {
    dropdown: (productID, clrs) => {
        let prd = getProduct(productID);
        let pClr = prd?.color;
        if (clrs && Array.isArray(clrs) && clrs?.length > 0) {
            let fClrs = clrs?.filter(c => c != pClr);
            clrs = [pClr, ...fClrs];
        }
        let html = `
            <div class="colorDropDown ${clrs?.length <= 1 && hideOnDisabled ? `invisible` : ``}">
                <input type="hidden" name="on1" value="Color" />
                <select name="os1" ${clrs?.length <= 1 && !hideOnDisabled ? 'disabled' : ''} id="${productID}_options_dropdown" class="colorSelector ${clrs?.length <= 1 ? `isDisabled` : `cursorPointer`}">
                    ${clrs?.map(c => (`
                        <option value="${c}" class="colorOption ${c == pClr ? `activeOption` : ``}">
                            ${c}
                        </option>    
                    `))}
                </select>
            </div>
        `;
        return html;
    },
}

function generateTShirtForm(productID, showSizeSelector = true) {
    let product = getProduct(productID);

    let formHTML = `
        <form class="paypalFormID_${productID}" oninput="onShirtFormInput(event)" id="${productID}_productForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">

           ${product?.types?.length > 1 ? (useTabButtons 
                ? typeComponents.tabs(productID, product?.types) 
                : typeComponents.dropdown(productID, product?.types)
            ) : ``}

            <div class="formFieldsContainer ${showSizeSelector ? `showSizeSelector` : `noSizeSelector`}">
                ${showSizeSelector ? (useTabButtons 
                    ? sizeComponents.tabs(productID, product?.sizes) 
                    : sizeComponents.dropdown(productID, product?.sizes)
                ) : ``}

                ${colorComponents.dropdown(productID, product?.colors)}
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
    Lacrosse_Tank_Top: generateTShirtForm(`Lacrosse_Tank_Top`),
    Lacrosse_NGHS_T_Shirt: generateTShirtForm(`Lacrosse_NGHS_T_Shirt`),
    Lacrosse_Sticks_T_Shirt: generateTShirtForm(`Lacrosse_Sticks_T_Shirt`),
    NGHS_Under_Armour_Hoodie: generateTShirtForm(`NGHS_Under_Armour_Hoodie`),
    NGHS_Under_Armour_T_Shirt: generateTShirtForm(`NGHS_Under_Armour_T_Shirt`),
    Lacrosse_Team_Rain_Jacket: generateTShirtForm(`Lacrosse_Team_Rain_Jacket`),
    Lacrosse_Hoodie_Sweatshirt: generateTShirtForm(`Lacrosse_Hoodie_Sweatshirt`),
    Girls_Lacrosse_Team_Bag: generateTShirtForm(`Girls_Lacrosse_Team_Bag`, false),
    Lacrosse_Crewneck_Sweatshirt: generateTShirtForm(`Lacrosse_Crewneck_Sweatshirt`),
    Lacrosse_Jacket_W_Embroidery: generateTShirtForm(`Lacrosse_Jacket_W_Embroidery`),
    Lacrosse_NGHS_Bulldogs_T_Shirt: generateTShirtForm(`Lacrosse_NGHS_Bulldogs_T_Shirt`),
    Lacrosse_Vertical_Stick_T_Shirt: generateTShirtForm(`Lacrosse_Vertical_Stick_T_Shirt`),
    Lacrosse_NGHS_Black_Bar_T_Shirt: generateTShirtForm(`Lacrosse_NGHS_Black_Bar_T_Shirt`),
}

function setProductForm(productID) {
    let prd = getProduct(productID);
    let productForm = productForms[productID];
    let showSizes = prd ? prd?.sizes?.length > 1 : true;
    if (productForm) {
        let frm = generateTShirtForm(productID, showSizes);
        let container = document.querySelector(`#paypal-button-container-${productID}`);
        if (container) {
            container.innerHTML = frm;
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
        <div id="product_${product?.id}" class="product ${product?.featured ? `featured` : ``} ${product?.extraClasses != `` ? product?.extraClasses : ``}">
            <a class="productLink">
                <img id="productImage_${product?.id}" class="productImage" src="${product?.usePlaceholder ? placeholderImgURL : product?.imageURLs[0]}" alt="Product Photo" />
                ${product?.ai ? `<img class="aiBadge" src="${aiBadge}" alt="AI Badge" />` : ``}
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

function setProducts(prods = products) {
    if (productsSection) {
        if (activeTab == `Spiritwear`) {
            if (!window.location.href.includes(`/edit`)) {
                productsSection.innerHTML = ``;
                for (let i = 0; i < prods.length; i++) {
                    let prod = prods[i];
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