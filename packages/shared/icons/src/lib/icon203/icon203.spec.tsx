import { render } from '@testing-library/react';

import Icon203 from './icon203';

describe('Icon203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon203 />);
    expect(baseElement).toBeTruthy();
  });
});
