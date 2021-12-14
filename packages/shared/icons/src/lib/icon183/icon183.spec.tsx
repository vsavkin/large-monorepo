import { render } from '@testing-library/react';

import Icon183 from './icon183';

describe('Icon183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon183 />);
    expect(baseElement).toBeTruthy();
  });
});
