import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import Paper1 from '../../assets/documents/cohort_profile_fekete.pdf';

const styles = {
    h3: {
        margin: '5px 20px',
        color: '#1b4332',
    },
    h4: {
        margin: '10px 20px',
        color: '#1b4332',
    },
    button: {
        margin: '15px 55px',
        background: "beige",
        color: "black",
        border: '1px solid #333',
        // textTransform: 'uppercase',
        padding: '10px 20px',
        borderRadius: '4px',
    },
    p: {
      margin: '15px 20px',
      color: '#343a40',
    },
}


const Publications = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <h3 style={styles.h3}>Scientific papers published in peer-review Journals: Australian Data only</h3>
        <hr></hr>
        <h4 style={styles.h4}>#1 Employment outcomes following spinal cord injury.</h4>
        <Button style={styles.button} variant="primary" onClick={handleShow}>
        Access full article here
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Employment Descriptive Paper</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={styles.p}>Citation:</p>
                <p style={styles.p}>Borg SJ, Geraghty T, Arora M, Foster M, Marshall R, Nunn A, Middleton JW. Employment outcomes following spinal cord injury: a population-based cross-sectional study in Australia.</p> 
                <p style={styles.p}>Spinal Cord. 2021 May 17. doi: 10.1038/s41393-021-00639-z.Epub ahead of print. PMID: 34002015.</p>
                <p style={styles.p}>Free access not available.</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button style={styles.button} variant="primary" href="https://www.nature.com/articles/s41393-021-00639-z" target="_blank" onClick={handleClose}>
                Access here
            </Button>
            </Modal.Footer>
        </Modal>
        {/* <h2 style={styles.h2}>Scientific papers published in peer-review Journals: International Data</h2>
        <hr></hr>
        <h3 style={styles.h3}>#1 Employment outcomes following spinal cord injury.</h3>
        <Button style={styles.button} variant="primary" onClick={handleShow}>
        Access full article here
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Employment Descriptive Paper</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={styles.p}>Citation:</p>
                <p style={styles.p}>Borg SJ, Geraghty T, Arora M, Foster M, Marshall R, Nunn A, Middleton JW. Employment outcomes following spinal cord injury: a population-based cross-sectional study in Australia.</p> 
                <p style={styles.p}>Spinal Cord. 2021 May 17. doi: 10.1038/s41393-021-00639-z.Epub ahead of print. PMID: 34002015.</p>
                <p style={styles.p}>Free access available.</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button style={styles.button} variant="primary" href="https://www.nature.com/articles/s41393-021-00639-z" target="_blank" onClick={handleClose}>
                Access here
            </Button>
            </Modal.Footer>
        </Modal> */}
        </>
    );
};

export default Publications;