import { render } from '@testing-library/react';

import ImportantComponent84 from './important-component-84';

describe('ImportantComponent84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent84 />);
    expect(baseElement).toBeTruthy();
  });
});
