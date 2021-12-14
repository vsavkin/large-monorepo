import { render } from '@testing-library/react';

import Icon127 from './icon127';

describe('Icon127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon127 />);
    expect(baseElement).toBeTruthy();
  });
});
