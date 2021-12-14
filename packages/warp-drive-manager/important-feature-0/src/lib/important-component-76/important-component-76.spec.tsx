import { render } from '@testing-library/react';

import ImportantComponent76 from './important-component-76';

describe('ImportantComponent76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent76 />);
    expect(baseElement).toBeTruthy();
  });
});
