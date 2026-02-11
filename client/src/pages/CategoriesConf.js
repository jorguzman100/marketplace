import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

/* 
categoryName: { type: String, required: true },
  products: {
    type: Schema.Types.ObjectId,
    ref: "product"
  }
*/

function CategoriesConfig({
    categories,
    handleCategoryInputOnChange,
    handleCategorySaveButton,
    handleCategoryDeleteButton,
    handleCategoryUpdateButton,
    handleCategoryUpdatedInputOnChange
}) {

    // const currentCategories = ['Category 1', 'Category 2', 'Category 3']
    let currentCategories = [];

    if (categories) {
        if (categories.length > 0) {
            currentCategories = [...categories];
        }
    }


    return (
        <div>
            <h4><strong>Manage your categories</strong></h4>

            <h5>Current categories</h5>
            <ListGroup>
                {currentCategories.map((currentcategory, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <ListGroup.Item >{currentcategory.categoryName}</ListGroup.Item>
                            <FormControl
                                data-categoryid={currentcategory._id}
                                onChange={handleCategoryUpdatedInputOnChange}
                            />
                            <InputGroup.Append>
                                <Button
                                    variant="outline-secondary"
                                    data-categoryid={currentcategory._id}
                                    onClick={handleCategoryUpdateButton}
                                >Update</Button>
                                <Button
                                    variant="outline-secondary"
                                    data-categoryid={currentcategory._id}
                                    onClick={handleCategoryDeleteButton}
                                >Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                })}
            </ListGroup>

            <h5>Create a new cateogry</h5>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Category name"
                    aria-label="category name"
                    aria-describedby="basic-addon2"
                    onChange={handleCategoryInputOnChange}
                />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        onClick={handleCategorySaveButton}
                    >Create</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default CategoriesConfig;

/*

*/