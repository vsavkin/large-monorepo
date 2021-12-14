import { render } from '@testing-library/react';

import Icon239 from './icon239';

describe('Icon239', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon239 />);
    expect(baseElement).toBeTruthy();
  });
});
