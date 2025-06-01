# Northwind OData Mock Server

This project includes a comprehensive mock server implementation for the Northwind OData service, which is commonly used for development and testing purposes in SAP UI5 applications.

## Features

- **Complete Northwind Data Model**: Includes all major entities from the classic Northwind database
- **OData v2 Compatible**: Fully compatible with SAP UI5 OData v2 models
- **Rich Mock Data**: Pre-populated with realistic sample data
- **Navigation Properties**: Supports associations between entities
- **Configurable Delays**: Simulate network latency for realistic testing

## Entities Available

1. **Categories** - Product categories with descriptions
2. **Products** - Product catalog with pricing and inventory information
3. **Suppliers** - Supplier company information
4. **Customers** - Customer database with contact details
5. **Orders** - Sales order headers
6. **Order_Details** - Order line items linking to products
7. **Invoices** - Invoice data (existing from your original setup)

## File Structure

```
webapp/
├── localService/
│   ├── metadata.xml          # OData service metadata definition
│   ├── mockserver.js         # Mock server configuration
│   └── mockdata/
│       ├── Categories.json
│       ├── Products.json
│       ├── Suppliers.json
│       ├── Customers.json
│       ├── Orders.json
│       ├── Order_Details.json
│       └── Invoices.json     # Original invoice data
└── test-mockserver.html      # Test page for the mock server
```

## Usage

### 1. Basic Setup in Your UI5 App

The mock server is configured in `webapp/manifest.json` with the following data source:

```json
{
  "dataSources": {
    "northwindService": {
      "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/",
      "type": "OData",
      "settings": {
        "odataVersion": "2.0",
        "localUri": "localService/metadata.xml"
      }
    }
  }
}
```

And the model configuration:

```json
{
  "models": {
    "northwind": {
      "type": "sap.ui.model.odata.v2.ODataModel",
      "settings": {
        "defaultOperationMode": "Server",
        "defaultBindingMode": "OneWay",
        "defaultCountMode": "Request"
      },
      "dataSource": "northwindService",
      "preload": true
    }
  }
}
```

### 2. Initialize Mock Server

To use the mock server in development, initialize it before your app starts:

```javascript
sap.ui.require(["your/app/localService/mockserver"], function (mockserver) {
  mockserver.init();
});
```

### 3. Testing the Mock Server

Open `webapp/test-mockserver.html` in your browser to:

- Verify the mock server is working
- Test all entity sets
- View sample data
- Check OData queries

### 4. Using in Controllers

Access the mock data in your controllers:

```javascript
// Get the model
var oModel = this.getView().getModel("northwind");

// Read categories
oModel.read("/Categories", {
  success: function (oData) {
    console.log("Categories:", oData.results);
  },
});

// Read products with category navigation
oModel.read("/Products", {
  urlParameters: {
    $expand: "Category",
  },
  success: function (oData) {
    console.log("Products with categories:", oData.results);
  },
});
```

## Sample Queries

Once the mock server is running, you can test these OData queries:

- `GET /Categories` - All categories
- `GET /Products` - All products
- `GET /Products(1)` - Specific product by ID
- `GET /Products?$expand=Category` - Products with category details
- `GET /Categories(1)/Products` - Products in a specific category
- `GET /Orders?$expand=Customer` - Orders with customer information
- `GET /Order_Details?$expand=Product,Order` - Order details with product and order info

## Configuration Options

### Mock Server Delays

You can configure response delays by adding URL parameters:

- `?serverDelay=1000` - 1 second delay
- No parameter defaults to 500ms

### Additional Mock Data

To add more mock data:

1. Edit the respective JSON files in `webapp/localService/mockdata/`
2. Ensure data consistency (foreign keys match)
3. Restart the mock server

## Development vs Production

The mock server should only be used in development. For production:

1. Remove mock server initialization
2. Point the data source URI to your actual OData service
3. Update authentication settings if needed

## Troubleshooting

### Common Issues

1. **CORS Errors**: The mock server handles CORS automatically
2. **Missing Data**: Check that JSON files have valid syntax
3. **Navigation Properties**: Ensure foreign keys match between entities
4. **Metadata Errors**: Validate the XML schema in `metadata.xml`

### Debug Tips

- Open browser dev tools to see network requests
- Check console for mock server logs
- Use the test page to validate individual entity sets
- Verify JSON syntax in mock data files

## Extending the Mock Server

To add new entities:

1. Update `metadata.xml` with new entity definitions
2. Create corresponding JSON mock data files
3. Add associations if needed
4. Update the test page to include new entities

This mock server provides a solid foundation for developing and testing SAP UI5 applications with OData services.
