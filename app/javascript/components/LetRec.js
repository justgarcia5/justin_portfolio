import React from 'react';
import { Image } from 'react-bootstrap';

import letRec from '../packs/images/documents/let_rec.png'

function LetRec() {
  return (
    <div className="mb-5 pb-5 text-center">
      <h5 className="docs-title">Letter of Recomendation</h5>
      <hr/>
      <a className="docs" type="button" data-toggle="modal" data-target=".bd2-example-modal-lg">
        <Image width={250} src={letRec} thumbnail/>
      </a>

      <div className="modal fade bd2-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
              <Image src={letRec} />
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

export default LetRec;
