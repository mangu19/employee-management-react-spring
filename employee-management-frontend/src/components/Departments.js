import React from 'react'

export default function Departments() {
  return (
    <>
        <label for="inputState" class="form-label">Department</label>
            <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Computer</option>
                <option>Mech</option>
                <option>Civil</option>
                <option>Fire</option>
            </select>
    </>
  )
}
