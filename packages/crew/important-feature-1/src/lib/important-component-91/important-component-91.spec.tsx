import { render } from '@testing-library/react';

import ImportantComponent91 from './important-component-91';

describe('ImportantComponent91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent91 />);
    expect(baseElement).toBeTruthy();
  });
});
