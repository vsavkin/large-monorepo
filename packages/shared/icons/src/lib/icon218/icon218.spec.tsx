import { render } from '@testing-library/react';

import Icon218 from './icon218';

describe('Icon218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon218 />);
    expect(baseElement).toBeTruthy();
  });
});
