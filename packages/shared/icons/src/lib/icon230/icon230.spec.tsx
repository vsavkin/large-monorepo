import { render } from '@testing-library/react';

import Icon230 from './icon230';

describe('Icon230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon230 />);
    expect(baseElement).toBeTruthy();
  });
});
