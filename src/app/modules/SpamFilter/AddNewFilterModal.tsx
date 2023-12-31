import React, { useEffect } from 'react'
import { KTSVG } from '../../../_metronic/helpers/components/KTSVG'




const AddNewFilterModal = () => {

  return (
    <div className="modal fade" tabIndex={-1} id="kt_modal_1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"> Create New Spam Filter</h5>
        <div
          className="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
      </div>
                  <div className="modal-body">
                      <div className="mb-3">
                          <label htmlFor="exampleFormControlInput1" className="form-label">
                              Filter Name:
                          </label>
                          <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Enter Filter Name"
                          />
                      </div>

                  </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddNewFilterModal