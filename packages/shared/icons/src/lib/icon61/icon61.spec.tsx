import { render } from '@testing-library/react';

import Icon61 from './icon61';

describe('Icon61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon61 />);
    expect(baseElement).toBeTruthy();
  });
});
