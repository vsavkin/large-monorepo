import { render } from '@testing-library/react';

import Icon70 from './icon70';

describe('Icon70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon70 />);
    expect(baseElement).toBeTruthy();
  });
});
