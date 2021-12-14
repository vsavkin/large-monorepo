import { render } from '@testing-library/react';

import Icon84 from './icon84';

describe('Icon84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon84 />);
    expect(baseElement).toBeTruthy();
  });
});
