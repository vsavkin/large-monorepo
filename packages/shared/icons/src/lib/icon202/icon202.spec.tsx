import { render } from '@testing-library/react';

import Icon202 from './icon202';

describe('Icon202', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon202 />);
    expect(baseElement).toBeTruthy();
  });
});
