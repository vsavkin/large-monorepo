import { render } from '@testing-library/react';

import ImportantComponent206 from './important-component-206';

describe('ImportantComponent206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent206 />);
    expect(baseElement).toBeTruthy();
  });
});
