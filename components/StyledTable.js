"use client";

import styled from "styled-components";

const TableContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: #3498db;
  color: white;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #ecf0f1;
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  font-size: 16px;
`;

const TableDataCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  color: #333;
`;

export default function StyledTable({ products }) {
    return (
        <TableContainer>
            <Table>
                <TableHeader>
                    <tr>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Product</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>Rating</TableHeaderCell>
                    </tr>
                </TableHeader>
                <tbody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableDataCell>{product.id}</TableDataCell>
                            <TableDataCell>{product.title}</TableDataCell>
                            <TableDataCell>${product.price}</TableDataCell>
                            <TableDataCell>⭐ {product.rating}</TableDataCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    );
}
