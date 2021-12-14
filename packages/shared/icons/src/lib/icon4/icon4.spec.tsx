import { render } from '@testing-library/react';

import Icon4 from './icon4';

describe('Icon4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon4 />);
    expect(baseElement).toBeTruthy();
  });
});
