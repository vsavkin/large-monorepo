import { render } from '@testing-library/react';

import Icon191 from './icon191';

describe('Icon191', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon191 />);
    expect(baseElement).toBeTruthy();
  });
});
