import { memo } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ButtonGroup, Button } from 'react-bootstrap';

const pages = [
  { name: 'PROFIL', href: '/' },
  { name: 'POLIKLINIK', href: '' },
  { name: 'FASILITAS', href: '/facility' },
  { name: 'LOKASI', href: '' },
  { name: 'KONTAK', href: '' },
];

function NavbarMenu() {
  return (
    <Navbar expand="lg">
      <Container className="d-flex flex-column gap-2">
        <Navbar.Brand href="/">
          <img src="../src/assets/logo.jpg" alt="rumah sakit" style={{ width: '75%' }} />
        </Navbar.Brand>
        <div className="text-center d-flex justify-content-between">
          <ButtonGroup className="mb-2 gap-2">
            {pages.map((page) => (
              <Button
                key={page.name}
                className="rounded-0 btn btn-success"
                style={{ width: "200px" }}
                href={page.href}
              >
                <b>{page.name}</b>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Container>
    </Navbar>
  );
}

export default memo(NavbarMenu);

