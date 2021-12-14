import { render } from '@testing-library/react';

import Icon139 from './icon139';

describe('Icon139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon139 />);
    expect(baseElement).toBeTruthy();
  });
});
