import { render } from '@testing-library/react';

import Icon206 from './icon206';

describe('Icon206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon206 />);
    expect(baseElement).toBeTruthy();
  });
});
