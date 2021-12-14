import { render } from '@testing-library/react';

import ImportantComponent48 from './important-component-48';

describe('ImportantComponent48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent48 />);
    expect(baseElement).toBeTruthy();
  });
});
