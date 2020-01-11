import React from 'react';
import { Image } from 'react-bootstrap';

import resume from '../packs/images/documents/resume.png'

function Resume() {
  return (
    <div className="mb-5 pb-5 text-center">
      <a className="docs" type="button" data-toggle="modal" data-target=".bd-example-modal-lg">
        <h5>Resume</h5>
        <hr/>
        <br/>
        <Image width={250} src={resume} thumbnail/>
      </a>

      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Image src={resume} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Resume;
