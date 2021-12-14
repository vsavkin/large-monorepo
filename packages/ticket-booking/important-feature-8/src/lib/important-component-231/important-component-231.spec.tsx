import { render } from '@testing-library/react';

import ImportantComponent231 from './important-component-231';

describe('ImportantComponent231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent231 />);
    expect(baseElement).toBeTruthy();
  });
});
